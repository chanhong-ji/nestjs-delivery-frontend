import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import errorLog from '../errorLog';
import { RestaurantQuery, RestaurantQueryVariables } from '../gql/graphql';
import { Helmet } from 'react-helmet-async';
import RestaurantBanner from '../components/RestaurantBanner';
import Dish from '../components/Dish';

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
            <RestaurantBanner
                coverImage={data?.restaurant.result?.coverImage ?? ''}
                name={data?.restaurant.result?.name ?? 'loading...'}
                address={data?.restaurant.result?.address ?? 'loading...'}
            />
            <div className='grid mt-16 md:grid-cols-3 gap-x-5 gap-y-10 mx-5'>
                {data?.restaurant.result?.menu.map((dish, idx) => (
                    <Dish
                        name={dish.name}
                        price={dish.price}
                        description={dish.description}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    );
}
