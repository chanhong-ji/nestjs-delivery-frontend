import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { MeQuery } from '../gql/graphql';
import { isLoggedInVar, userLogout } from '../apollo';

export const ME_QUERY = gql`
    query me {
        me {
            id
            email
            role
            verified
        }
    }
`;

export const useMe = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar);

    return useQuery<MeQuery>(ME_QUERY, {
        onCompleted(data) {},
        onError(error) {
            if (isLoggedIn) {
                userLogout();
                window.location.reload();
            }
        },
    });
};
