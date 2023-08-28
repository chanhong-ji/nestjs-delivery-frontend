import { gql, useQuery, useSubscription } from '@apollo/client';
import { useMe } from '../../hooks/useMe';
import {
    OrderStatus,
    OrdersQuery,
    OrdersQueryVariables,
    PendingOrdersSubscription,
    PendingOrdersSubscriptionVariables,
    UserRole,
} from '../../gql/graphql';
import { ORDER_PART_FRAGMENT } from '../../fragments';
import OrderBlock from '../../components/OrderBlock';

type IItem = {
    __typename?: 'OrderItem';
    id: number;
    choices?: Array<{
        __typename?: 'OrderItemOption';
        name: string;
    }> | null;
    dish: { __typename?: 'Dish'; id: number; name: string };
};

export type Order = {
    __typename?: 'Order';
    id: number;
    address: string;
    createdAt: any;
    status: OrderStatus;
    total: number;
    restaurant?: {
        __typename?: 'Restaurant';
        id: number;
        name: string;
    } | null;
    items: IItem[];
};

const PENDING_ORDERS_SUBSCRIPTION = gql`
    ${ORDER_PART_FRAGMENT}
    subscription pendingOrders {
        pendingOrders {
            ...OrderPartFragment
        }
    }
`;

const GET_ORDERS = gql`
    ${ORDER_PART_FRAGMENT}
    query orders($page: Int!, $status: OrderStatus) {
        orders(page: $page, status: $status) {
            ok
            error
            totalPages
            totalItems
            result {
                ...OrderPartFragment
            }
        }
    }
`;

export default function Orders() {
    const { data: meData } = useMe();

    useSubscription<
        PendingOrdersSubscription,
        PendingOrdersSubscriptionVariables
    >(PENDING_ORDERS_SUBSCRIPTION, {
        skip: !meData?.me || meData.me.role !== UserRole.Owner,

        onData({ data: { data }, client }) {
            if (data?.pendingOrders && ordersData?.orders) {
                client.cache.writeFragment({
                    fragment: ORDER_PART_FRAGMENT,
                    data: data.pendingOrders,
                });

                const cachedOrder = client.cache.readFragment({
                    fragment: ORDER_PART_FRAGMENT,
                    id: `Order:${data.pendingOrders.id}`,
                });

                if (cachedOrder) {
                    client.cache.updateQuery(
                        {
                            query: GET_ORDERS,
                            variables: { page: 1, status: null },
                        },
                        (data) => ({
                            orders: {
                                ...data.orders,
                                result: [cachedOrder, ...data.orders.result],
                            },
                        })
                    );
                }
            }
        },
    });

    const { data: ordersData } = useQuery<OrdersQuery, OrdersQueryVariables>(
        GET_ORDERS,
        { variables: { page: 1, status: null } }
    );

    return (
        <div className='center-box pt-10'>
            {ordersData?.orders.result?.map((order, idx) => (
                <OrderBlock
                    idx={(ordersData.orders.result?.length ?? 0) - idx - 1}
                    order={order}
                    key={idx}
                />
            ))}
        </div>
    );
}
