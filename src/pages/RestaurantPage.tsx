import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import errorLog from '../errorLog';
import { RestaurantQuery, RestaurantQueryVariables } from '../gql/graphql';
import { Helmet } from 'react-helmet-async';

const RESTAURANT_QUERY = gql`
    query restaurant($restaurantId: Int!) {
        restaurant(id: $restaurantId) {
            ok
            error
            result {
                id
                name
                coverImage
                address
                menu {
                    id
                    name
                    photo
                    price
                    dishOptions {
                        extra
                        name
                    }
                    description
                }
            }
        }
    }
`;

export default function RestaurantPage() {
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();
    const { data } = useQuery<RestaurantQuery, RestaurantQueryVariables>(
        RESTAURANT_QUERY,

        {
            variables: { restaurantId: +id },
            onError(error) {
                errorLog('retaurant', error);
            },
            onCompleted(data) {
                if (!data.restaurant.ok) navigate('/', { replace: true });
            },
        }
    );

    return (
        <div>
            <Helmet>
                <title>
                    {data?.restaurant.result?.name || ''} | Nuber Eats
                </title>
            </Helmet>
            <div
                className=' bg-gray-800 bg-center bg-cover py-48'
                style={{
                    backgroundImage: `url(${data?.restaurant.result?.coverImage})`,
                }}
            >
                <div className='bg-white py-8 pl-48 pr-7 w-fit max-w-lg'>
                    <h4 className='text-4xl mb-3 w-fit'>
                        {data?.restaurant.result?.name}
                    </h4>
                    <h6 className='text-sm font-light w-fit'>
                        {data?.restaurant.result?.address}
                    </h6>
                </div>
            </div>
        </div>
    );
}
