import { gql, useQuery } from '@apollo/client';
import { RESTAURANT_FRAGMENT } from '../../fragments';
import {
    MyRestaurantsQuery,
    MyRestaurantsQueryVariables,
    UserRole,
} from '../../gql/graphql';
import errorLog from '../../errorLog';
import { useMe } from '../../hooks/useMe';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Restaurants from '../Restaurants';

const MY_RESTAURANTS_QUERY = gql`
    ${RESTAURANT_FRAGMENT}
    query MyRestaurants {
        myRestaurants {
            ok
            error
            result {
                ...RestaurantFragment
            }
        }
    }
`;

export default function MyRestaurants() {
    const { loading, data } = useQuery<
        MyRestaurantsQuery,
        MyRestaurantsQueryVariables
    >(MY_RESTAURANTS_QUERY, {
        onError: (error) => {
            errorLog('myRestaurants', error);
        },
    });

    return (
        <div className='center-box mt-32'>
            <h2 className='text-4xl font-medium mb-10'>My Restaurants</h2>

            {data?.myRestaurants.result &&
            data.myRestaurants.result.length === 0 ? (
                <>
                    <h4 className='text-xl mb-5'>You have no restaurants.</h4>
                    <Link
                        className='text-blue-600 hover:underline'
                        to='create-restaurant'
                    >
                        Create one &rarr;
                    </Link>
                </>
            ) : (
                <Restaurants
                    loading={loading}
                    restaurants={data?.myRestaurants.result ?? []}
                    role={UserRole.Owner}
                />
            )}
        </div>
    );
}
