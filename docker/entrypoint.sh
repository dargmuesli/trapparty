#!/bin/sh
set -e

sqitch -C /srv/app/sqitch/ deploy "$(cat /run/secrets/trapparty_sqitch-target)"

if [ "$NODE_ENV" != "production" ]; then
    pnpm config set store-dir "/srv/.pnpm-store"
    pnpm install
fi

exec "$@"
