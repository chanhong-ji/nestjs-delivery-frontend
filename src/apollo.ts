import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TOKEN } from './constants';
import variables from './variables';

const token = localStorage.getItem(TOKEN);
export const isLoggedInVar = makeVar(Boolean(token));
export const tokenVar = makeVar(token);

export const userLogout = () => {
    localStorage.removeItem(TOKEN);
    isLoggedInVar(false);
    tokenVar(null);
};

export const userLogin = (token: string) => {
    localStorage.setItem(TOKEN, token);
    isLoggedInVar(true);
    tokenVar(token);
};

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
