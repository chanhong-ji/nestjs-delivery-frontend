import { useQuery } from '@apollo/client';
import { OrdersQuery, OrdersQueryVariables } from '../gql/graphql';
import { GET_ORDERS } from './owner/OrdersForOwner';
import OrderBlock from '../components/OrderBlock';

export default function OrdersForClient() {
    const { data: ordersData } = useQuery<OrdersQuery, OrdersQueryVariables>(
        GET_ORDERS,
        { variables: { page: 1, status: null } }
    );

    return (
        <div className='center-box pt-10'>
            {ordersData?.orders.result?.map((order, idx) => (
                <OrderBlock
                    key={idx}
                    idx={(ordersData.orders.result?.length ?? 0) - idx - 1}
                    order={order}
                    statusIncluded={false}
                />
            ))}
        </div>
    );
}
