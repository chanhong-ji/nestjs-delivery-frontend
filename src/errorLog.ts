import { ApolloError } from '@apollo/client';

export default function errorLog(queryName: string, error: ApolloError) {
    console.log(`${queryName} erorr: ${error.graphQLErrors[0]}`);
}
