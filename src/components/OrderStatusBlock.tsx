import { gql, useMutation } from '@apollo/client';
import { useMe } from '../hooks/useMe';
import {
    EditOrderForOwnerMutation,
    EditOrderForOwnerMutationVariables,
    OrderStatus,
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

interface IProps {
    id: number;
    status: OrderStatus;
    className?: string;
}

export default function OrderStatusBlock(props: IProps) {
    const { data: meData } = useMe();

    const [editOrder, { loading: editOrderLoading }] = useMutation<
        EditOrderForOwnerMutation,
        EditOrderForOwnerMutationVariables
    >(EDIT_ORDER_FOR_OWNER_MUTATION);

    const updateOrder = (status: OrderStatusForOwner) => {
        if (editOrderLoading) return;

        editOrder({
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
                                updateOrder(OrderStatusForOwner.Cooking);
                            }}
                        >
                            주문 수락
                        </button>
                    )}
                    {props.status === OrderStatus.Cooking && (
                        <button
                            className='button'
                            onClick={() => {
                                updateOrder(OrderStatusForOwner.Cooked);
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
        </div>
    );
}
