import { gql, useQuery, useSubscription } from '@apollo/client';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RestaurantBanner from '../../components/RestaurantBanner';
import errorLog from '../../errorLog';
import { DISH_FRAGMENT, RESTAURANT_FRAGMENT } from '../../fragments';
import {
    MyRestaurantQuery,
    MyRestaurantQueryVariables,
    PendingOrdersSubscription,
    PendingOrdersSubscriptionVariables,
    UserRole,
} from '../../gql/graphql';
import Dish from '../../components/Dish';
import { useMe } from '../../hooks/useMe';

export const MY_RESTAURANT_QUERY = gql`
    ${RESTAURANT_FRAGMENT}
    ${DISH_FRAGMENT}
    query myRestaurant($myRestaurantId: Int!) {
        myRestaurant(id: $myRestaurantId) {
            ok
            error
            result {
                ...RestaurantFragment
                menu {
                    ...DishFragment
                }
            }
        }
    }
`;

const PENDING_ORDERS_SUBSCRIPTION = gql`
    subscription pendingOrders {
        pendingOrders {
            id
            address
            createdAt
            total
            customerId
            items {
                id
                dish {
                    name
                    id
                }
                choices {
                    name
                }
            }
        }
    }
`;

export default function MyRestaurant() {
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();
    const { data: meData } = useMe();
    const { data } = useQuery<MyRestaurantQuery, MyRestaurantQueryVariables>(
        MY_RESTAURANT_QUERY,
        {
            variables: { myRestaurantId: +id },
            onError(error) {
                errorLog('myRestaurant', error);
            },
            onCompleted({ myRestaurant: { ok, error, result } }) {
                if (!ok) {
                    switch (error) {
                        case 'Not Found':
                            navigate('/', { replace: true });
                            break;
                        case 'Not Authorize':
                            navigate('/', { replace: true });
                            break;
                        default:
                            navigate('/', { replace: true });
                            break;
                    }
                }
            },
        }
    );

    const { data: pendingOrdersData } = useSubscription<
        PendingOrdersSubscription,
        PendingOrdersSubscriptionVariables
    >(PENDING_ORDERS_SUBSCRIPTION, {
        skip: !meData?.me || meData.me.role !== UserRole.Owner,
        onData(data) {
            console.log(data);
        },
    });

    return (
        <div>
            <RestaurantBanner
                address={data?.myRestaurant.result?.address ?? 'loading...'}
                name={data?.myRestaurant.result?.name ?? 'loading...'}
                coverImage={data?.myRestaurant.result?.coverImage ?? ''}
            />

            <div className='mt-10 ml-5'>
                <Link
                    to={`add-dish`}
                    className=' mr-8 text-white bg-gray-800 py-3 px-10'
                >
                    <button>Add Dish &rarr;</button>
                </Link>
                <div className='mt-10'>
                    {data?.myRestaurant.result?.menu.length === 0 ? (
                        <h4 className='text-xl mb-5'>Please upload a dish!</h4>
                    ) : null}
                </div>
            </div>

            <div className='grid mt-16 md:grid-cols-3 gap-x-5 gap-y-10 mx-5'>
                {data?.myRestaurant.result?.menu.map((dish, idx) => (
                    <Dish
                        id={dish.id}
                        name={dish.name}
                        price={dish.price}
                        description={dish.description}
                        key={idx}
                        options={[]}
                        buttonTitle='편집'
                        onClickButton={() => {}}
                    />
                ))}
            </div>
        </div>
    );
}
