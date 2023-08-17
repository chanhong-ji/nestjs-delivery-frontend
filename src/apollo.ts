import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    makeVar,
    split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
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

const wsLink = new GraphQLWsLink(
    createClient({
        url: variables.db.subscriptionUrl,
        connectionParams: {
            Authorization: tokenVar() ? `Bearer ${tokenVar()}` : null,
        },
    })
);

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

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    authLink.concat(httpLink)
);

const client = new ApolloClient({
    link: splitLink,
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
