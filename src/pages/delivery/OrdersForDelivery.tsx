import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery, useSubscription } from '@apollo/client';
import NewOrder, { AcceptedOrder } from '../../components/NewOrder';
import { ORDER_PART_FRAGMENT, ORDER_UPDATE_FRAGMENT } from '../../fragments';
import { GET_ORDERS } from '../owner/OrdersForOwner';
import { EDIT_ORDER_FOR_DELIVERY_MUTATION } from '../../components/OrderStatusBlock';
import {
    AcceptedOrdersSubscription,
    AcceptedOrdersSubscriptionVariables,
    CookedOrdersSubscription,
    CookedOrdersSubscriptionVariables,
    EditOrderForDeliveryMutation,
    EditOrderForDeliveryMutationVariables,
    OrdersQuery,
    OrdersQueryVariables,
} from '../../gql/graphql';
import OrderBlock from '../../components/OrderBlock';

const ACCEPTED_ORDERS_SUBSCRIPTION = gql`
    ${ORDER_PART_FRAGMENT}
    subscription acceptedOrders {
        acceptedOrders {
            ...OrderPartFragment
        }
    }
`;

const COOKED_ORDERS_SUBSCRIPTION = gql`
    ${ORDER_UPDATE_FRAGMENT}
    subscription cookedOrders {
        cookedOrders {
            ...OrderUpdateFragment
        }
    }
`;

export default function OrdersForDelivery() {
    const [acceptedOrders, setAcceptedOrders] = useState<Array<AcceptedOrder>>(
        []
    );

    const { data: ordersData, refetch } = useQuery<
        OrdersQuery,
        OrdersQueryVariables
    >(GET_ORDERS, { variables: { page: 1 } });

    useSubscription<
        CookedOrdersSubscription,
        CookedOrdersSubscriptionVariables
    >(COOKED_ORDERS_SUBSCRIPTION, {
        onData({ data: { data }, client }) {
            if (data?.cookedOrders.status) {
                client.cache.modify({
                    id: `Order:${data?.cookedOrders.id}`,
                    fields: {
                        status: () => data?.cookedOrders.status,
                    },
                });
            }
        },
    });

    useSubscription<
        AcceptedOrdersSubscription,
        AcceptedOrdersSubscriptionVariables
    >(ACCEPTED_ORDERS_SUBSCRIPTION, {
        onData({ data: { data } }) {
            if (data?.acceptedOrders) {
                setAcceptedOrders((prev) => [data.acceptedOrders, ...prev]);
            }
        },
    });

    const [editOrderForDelivery, { loading: editOrderForDeliveryLoading }] =
        useMutation<
            EditOrderForDeliveryMutation,
            EditOrderForDeliveryMutationVariables
        >(EDIT_ORDER_FOR_DELIVERY_MUTATION);

    const acceptOrder = (order: AcceptedOrder) => {
        if (editOrderForDeliveryLoading) return;

        editOrderForDelivery({
            variables: { editOrderForDeliveryId: order.id, status: null },
            onCompleted({ editOrderForDelivery: { ok, error } }) {
                setAcceptedOrders((prev) =>
                    prev.filter(
                        (acceptedOrder) => acceptedOrder.id !== order.id
                    )
                );

                if (!ok) {
                    switch (error) {
                        case 'Wrong Access':
                            window.alert('이미 수락된 건 입니다');
                            break;

                        default:
                            break;
                    }
                }
            },

            update(cache, result) {
                const { data } = result;
                if (data?.editOrderForDelivery.ok) {
                    cache.writeFragment({
                        fragment: ORDER_PART_FRAGMENT,
                        data: order,
                    });

                    const cachedOrder = cache.readFragment({
                        fragment: ORDER_PART_FRAGMENT,
                        id: `Order:${order.id}`,
                    });

                    cache.updateQuery(
                        {
                            query: GET_ORDERS,
                            variables: { page: 1 },
                        },
                        (data) => ({
                            orders: {
                                ...data.orders,
                                result: [...data.orders.result, cachedOrder],
                            },
                        })
                    );
                }
            },
        });
    };

    const rejectOrder = (order: AcceptedOrder) => {
        if (editOrderForDeliveryLoading) return;

        setAcceptedOrders((prev) =>
            [...prev].filter((order) => order.id !== order.id)
        );
    };

    useEffect(() => {
        refetch();
    }, []);

    return (
        <div>
            <div className='fixed h-5/6 w-96 bg-slate-700 overflow-y-scroll overflow-hidden px-3 py-3 mt-6 ml-5 rounded-md drop-shadow-lg'>
                <div className='text-xl text-center font-semibold text-white border-bottom-white py-3'>
                    신규 처리주문
                </div>
                {acceptedOrders.map((acceptedOrder, index) => (
                    <NewOrder
                        {...acceptedOrder}
                        key={index + ''}
                        onClickAcceptButton={() => acceptOrder(acceptedOrder)}
                        onClickRejectButton={() => rejectOrder(acceptedOrder)}
                    />
                ))}
            </div>
            <div className='center-box pt-10 col-span-3'>
                {ordersData?.orders.result?.map((order, idx) => (
                    <OrderBlock
                        idx={idx}
                        order={order}
                        key={idx}
                        statusIncluded={true}
                    />
                ))}
            </div>
        </div>
    );
}
