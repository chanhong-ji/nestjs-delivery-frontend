import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import {
    OrderQuery,
    OrderQueryVariables,
    OrderUpdatesSubscription,
    OrderUpdatesSubscriptionVariables,
} from '../gql/graphql';
import errorLog from '../errorLog';
import { ORDER_FULL_FRAGMENT, ORDER_UPDATE_FRAGMENT } from '../fragments';
import OrderStatusBlock from './OrderStatusBlock';

const ORDER_UPDATES_SUBSCRIPTION = gql`
    ${ORDER_UPDATE_FRAGMENT}
    subscription orderUpdates($orderId: Int!) {
        orderUpdates(id: $orderId) {
            ...OrderUpdateFragment
        }
    }
`;

const ORDER_QUERY = gql`
    ${ORDER_FULL_FRAGMENT}
    query order($orderId: Int!) {
        order(id: $orderId) {
            ok
            error
            result {
                ...OrderFullFragment
            }
        }
    }
`;

export default function Order() {
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();

    const { data, subscribeToMore } = useQuery<OrderQuery, OrderQueryVariables>(
        ORDER_QUERY,
        {
            variables: { orderId: +id },
            onCompleted: ({ order: { ok, error } }) => {
                if (!ok) {
                    switch (error) {
                        case 'Not Found':
                            navigate('/', { replace: true });
                            break;

                        case 'Not Authorized':
                            navigate('/', { replace: true });
                            break;

                        default:
                            navigate('/', { replace: true });
                            break;
                    }
                }
            },
            onError: (error) => {
                errorLog('order', error);
                navigate('/', { replace: true });
            },
        }
    );

    useEffect(() => {
        if (data?.order.result) {
            subscribeToMore<
                OrderUpdatesSubscription,
                OrderUpdatesSubscriptionVariables
            >({
                document: ORDER_UPDATES_SUBSCRIPTION,
                variables: { orderId: +id },
                updateQuery: (
                    prev,
                    {
                        subscriptionData: { data },
                    }: {
                        subscriptionData: {
                            data: any;
                        };
                    }
                ) => {
                    if (!data) return prev;

                    return {
                        order: {
                            ...prev.order,
                            result: {
                                ...prev.order.result,
                                ...data.orderUpdates,
                                ...(prev.order.result?.driver && {
                                    driver: prev.order.result.driver,
                                }),
                            },
                        },
                    };
                },
            });
        }
    }, [data]);

    return (
        <div className='mt-32 container flex justify-center'>
            <div className='border border-gray-800 w-full max-w-screen-sm flex flex-col justify-center'>
                <h4 className='bg-gray-800 w-full py-5 text-white text-center text-xl'>
                    Order #{id}
                </h4>
                <h5 className='p-5 pt-10 text-3xl text-center '>
                    ${data?.order.result?.total}
                </h5>
                <div className='p-5 text-xl grid gap-6'>
                    <div className='border-t pt-5 border-gray-700'>
                        Prepared By:{' '}
                        <span className='font-medium'>
                            {data?.order.result?.restaurant?.name}
                        </span>
                    </div>
                    <div className='border-t pt-5 border-gray-700 '>
                        Deliver To:{' '}
                        <span className='font-medium'>
                            {data?.order.result?.customer?.email}
                        </span>
                    </div>
                    <div className='border-t border-b py-5 border-gray-700'>
                        Driver:{' '}
                        <span className='font-medium'>
                            {data?.order.result?.driver?.email || 'Not yet.'}
                        </span>
                    </div>
                    {data?.order.result?.status && (
                        <OrderStatusBlock
                            id={+id}
                            status={data.order.result.status}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
