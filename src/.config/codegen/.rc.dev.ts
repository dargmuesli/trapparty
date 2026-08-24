import type { CodegenConfig } from '@graphql-codegen/cli'

import { codegenConfigBase } from './.rc'

const codegenConfig: CodegenConfig = {
  ...codegenConfigBase,
  schema: 'https://trapparty-postgraphile.app.localhost/graphql',
}

export default codegenConfig
