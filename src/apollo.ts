import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { TOKEN } from './constants';
import variables from './variables';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar(localStorage.getItem(TOKEN) || '');

const client = new ApolloClient({
    uri: variables.db.url,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    isLoggedIn: {
                        read() {
                            return isLoggedInVar();
                        },
                    },
                    token: {
                        read() {
                            return tokenVar();
                        },
                    },
                },
            },
        },
    }),
});

export default client;
