import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';
import variables from './src/variables';

const config: CodegenConfig = {
    overwrite: true,
    schema: variables.db.url,
    documents: 'src/**/*.tsx',
    generates: {
        'src/gql/': {
            preset: 'client',
            plugins: [],
        },
    },
};

export default config;
