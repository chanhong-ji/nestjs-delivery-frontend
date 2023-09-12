import { gql, useMutation } from '@apollo/client';
import { useMe } from '../hooks/useMe';
import {
    EditOrderForDeliveryMutation,
    EditOrderForDeliveryMutationVariables,
    EditOrderForOwnerMutation,
    EditOrderForOwnerMutationVariables,
    OrderStatus,
    OrderStatusForDelivery,
    OrderStatusForOwner,
    UserRole,
} from '../gql/graphql';

const EDIT_ORDER_FOR_OWNER_MUTATION = gql`
    mutation editOrderForOwner(
        $editOrderForOwnerId: Int!
        $status: OrderStatusForOwner!
    ) {
        editOrderForOwner(id: $editOrderForOwnerId, status: $status) {
            ok
            error
        }
    }
`;

export const EDIT_ORDER_FOR_DELIVERY_MUTATION = gql`
    mutation editOrderForDelivery(
        $editOrderForDeliveryId: Int!
        $status: OrderStatusForDelivery
    ) {
        editOrderForDelivery(id: $editOrderForDeliveryId, status: $status) {
            ok
            error
        }
    }
`;

interface IProps {
    id: number;
    status: OrderStatus;
    className?: string;
}

export default function OrderStatusBlock(props: IProps) {
    const { data: meData } = useMe();

    const [editOrderForOwner, { loading: editOrderForOwnerLoading }] =
        useMutation<
            EditOrderForOwnerMutation,
            EditOrderForOwnerMutationVariables
        >(EDIT_ORDER_FOR_OWNER_MUTATION);

    const [editOrderForDelivery, { loading: editOrderForDeliveryLoading }] =
        useMutation<
            EditOrderForDeliveryMutation,
            EditOrderForDeliveryMutationVariables
        >(EDIT_ORDER_FOR_DELIVERY_MUTATION);

    const updateOrderForOwner = (status: OrderStatusForOwner) => {
        if (editOrderForOwnerLoading) return;

        editOrderForOwner({
            variables: {
                editOrderForOwnerId: props.id,
                status,
            },
            update(cache) {
                cache.modify({
                    id: `Order:${props.id}`,
                    fields: {
                        status: () => status,
                    },
                });
            },
        });
    };

    const updateOrderForDelivery = (status: OrderStatusForDelivery) => {
        if (editOrderForDeliveryLoading) return;

        editOrderForDelivery({
            variables: {
                editOrderForDeliveryId: props.id,
                status,
            },
            update(cache) {
                cache.modify({
                    id: `Order:${props.id}`,
                    fields: {
                        status: () => status,
                    },
                });
            },
        });
    };

    return (
        <div>
            {meData?.me.role === UserRole.Client && (
                <span>주문상태: {props.status}</span>
            )}
            {meData?.me.role === UserRole.Owner && (
                <>
                    {props.status === OrderStatus.Pending && (
                        <button
                            className='button'
                            onClick={() => {
                                updateOrderForOwner(
                                    OrderStatusForOwner.Cooking
                                );
                            }}
                        >
                            주문 수락
                        </button>
                    )}
                    {props.status === OrderStatus.Cooking && (
                        <button
                            className='button'
                            onClick={() => {
                                updateOrderForOwner(OrderStatusForOwner.Cooked);
                            }}
                        >
                            준비 완료
                        </button>
                    )}
                    {props.status !== OrderStatus.Pending &&
                        props.status !== OrderStatus.Cooking && (
                            <span>주문상태: {props.status}</span>
                        )}
                </>
            )}
            {meData?.me.role === UserRole.Delivery && (
                <>
                    {props.status === OrderStatus.PickedUp && (
                        <button
                            className='button'
                            onClick={() => {
                                updateOrderForDelivery(
                                    OrderStatusForDelivery.Delivered
                                );
                            }}
                        >
                            배달 완료
                        </button>
                    )}
                    {props.status === OrderStatus.Cooked && (
                        <button
                            className='button'
                            onClick={() => {
                                updateOrderForDelivery(
                                    OrderStatusForDelivery.PickedUp
                                );
                            }}
                        >
                            픽업 완료
                        </button>
                    )}
                    {props.status !== OrderStatus.Cooked &&
                        props.status !== OrderStatus.PickedUp && (
                            <span>주문상태: {props.status}</span>
                        )}
                </>
            )}
        </div>
    );
}
