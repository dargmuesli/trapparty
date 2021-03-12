#############
# Serve Nuxt in development mode.

# Should be the specific version of node:buster.
# `node-zopfli-es` and `sqitch` require at least buster.
# `node-zopfli-es` requires non-slim.
FROM node:14.16.0-buster@sha256:a0abf733da5e3924ed4285c82d073324e946cee84de34fd0cbdaf148abafed33 AS development

# https://github.com/typicode/husky/issues/821
ENV HUSKY_SKIP_INSTALL=1

# Update and install dependencies.
# - `git` is required by the `yarn` command
# - `sqitch` is required by the entrypoint
# - `curl` is required by the healthcheck
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
        git \
    && apt-get install --no-install-recommends -y \
        libdbd-pg-perl \
        postgresql-client \
        sqitch \
    && apt-get install --no-install-recommends -y \
        curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/app/

COPY ./nuxt/package.json ./nuxt/yarn.lock ./

RUN yarn install

COPY ./nuxt/ ./

COPY ./sqitch/ /srv/sqitch/
COPY ./docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["dev", "--hostname", "0.0.0.0"]
HEALTHCHECK --interval=10s CMD curl -f http://localhost:3000/healthcheck || exit 1


########################
# Build Nuxt.

# Should be the specific version of node:buster.
# `node-zopfli-es` and `sqitch` require at least buster.
# `node-zopfli-es` requires non-slim.
FROM node:14.16.0-buster@sha256:a0abf733da5e3924ed4285c82d073324e946cee84de34fd0cbdaf148abafed33 AS build

ARG NUXT_ENV_STACK_DOMAIN=jonas-thelemann.de
ENV NUXT_ENV_STACK_DOMAIN=${NUXT_ENV_STACK_DOMAIN}
ENV NODE_ENV=production

# Update and install dependencies.
# - `git` is required by the `yarn` command
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
        git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/app/

COPY --from=development /srv/app/ ./

RUN yarn run build

# Discard devDependencies.
RUN yarn install


#######################
# Provide a web server.
# Requires node (cannot be static) as the server acts as backend too.

# Should be the specific version of node:buster-slim.
# sqitch requires at least buster.
FROM node:14.16.0-buster-slim@sha256:908fe3e2e9196721064e1f1bf001f630ae1d7b2b4bdd65effff9f271711b04bb AS production

ENV NODE_ENV=production

# Update and install dependencies.
# - `sqitch` is required by the entrypoint
# - `curl` is required by the healthcheck
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
        libdbd-pg-perl \
        postgresql-client \
        sqitch \
    && apt-get install --no-install-recommends -y \
        curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/app/

COPY --from=build /srv/app/ ./

COPY ./sqitch/ /srv/sqitch/
COPY ./docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["start", "--hostname", "0.0.0.0"]
HEALTHCHECK --interval=10s CMD curl -f http://localhost:3000/healthcheck || exit 1