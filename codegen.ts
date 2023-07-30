import 'dotenv/config';
import type { CodegenConfig } from '@graphql-codegen/cli';
import variables from './src/variables';

const config: CodegenConfig = {
    overwrite: true,
    schema: variables.db.url,
    documents: 'src/**/*.{tsx,ts}',
    generates: {
        'src/gql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                fragmentMasking: false,
            },
        },
    },
};

export default config;
