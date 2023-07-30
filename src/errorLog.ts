import { ApolloError } from '@apollo/client';

export default function errorLog(queryName: string, error: ApolloError) {
    console.dir(
        `${queryName} error log: ${JSON.stringify(error.graphQLErrors)}`
    );
}
