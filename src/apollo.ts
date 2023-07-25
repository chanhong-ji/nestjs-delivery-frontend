import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TOKEN } from './constants';
import variables from './variables';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar(localStorage.getItem(TOKEN) || '');

const httpLink = createHttpLink({
    uri: variables.db.url,
    credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            ...(tokenVar() && { authorization: `Bearer ${tokenVar()}` }),
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
