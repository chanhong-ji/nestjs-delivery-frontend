import { gql, useMutation, useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { FieldArrayWithId, useFieldArray, useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { DISH_FRAGMENT, RESTAURANT_FRAGMENT } from '../fragments';
import errorLog from '../errorLog';
import { useMe } from '../hooks/useMe';
import RestaurantBanner from '../components/RestaurantBanner';
import Dish from '../components/Dish';
import ShoppingBag from '../components/ShoppingBag';
import {
    CreateOrderMutation,
    CreateOrderMutationVariables,
    RestaurantQuery,
    RestaurantQueryVariables,
} from '../gql/graphql';

const RESTAURANT_QUERY = gql`
    ${RESTAURANT_FRAGMENT}
    ${DISH_FRAGMENT}
    query restaurant($restaurantId: Int!) {
        restaurant(id: $restaurantId) {
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

const CREATE_ORDER_MUTATION = gql`
    mutation createOrder(
        $restaurantId: Int!
        $items: [createOrderItemInput!]!
        $address: String!
    ) {
        createOrder(
            restaurantId: $restaurantId
            items: $items
            address: $address
        ) {
            error
            ok
        }
    }
`;

export interface IDish {
    dishId: number;
    choices?: string[];
    count: number;
}

export interface IOrderForm {
    order: IDish[];
}

export default function RestaurantPage() {
    const { id } = useParams() as { id: string };
    const navigate = useNavigate();
    const { data: meData } = useMe();
    const { control, handleSubmit, getValues } = useForm<IOrderForm>({
        mode: 'onChange',
    });
    const { fields, append, update, remove } = useFieldArray({
        control,
        name: 'order',
    });

    const { data } = useQuery<RestaurantQuery, RestaurantQueryVariables>(
        RESTAURANT_QUERY,
        {
            variables: { restaurantId: +id },
            onError(error) {
                errorLog('retaurant', error);
            },
            onCompleted(data) {
                if (!data.restaurant.ok)
                    return navigate('/', { replace: true });
            },
        }
    );

    const [createOrder, { loading }] = useMutation<
        CreateOrderMutation,
        CreateOrderMutationVariables
    >(CREATE_ORDER_MUTATION, {
        onError(error) {
            errorLog('createOrder', error);
        },
    });

    const onValid = () => {
        if (loading) return;

        const orders = getValues().order;
        const items = [];

        for (const order of orders) {
            const choices = order.choices?.map((choice) => ({ name: choice }));
            for (let i = 0; i < order.count; i++) {
                items.push({ dishId: order.dishId, choices });
            }
        }

        createOrder({
            variables: {
                restaurantId: +id,
                address: '임시 주소지',
                items,
            },
            onCompleted(data) {
                navigate('/my-page');
            },
        });
    };

    const addItemToCart = (dishId: number, choices?: string[]) => {
        const dishIndex = fields.findIndex(
            (order, index) =>
                order.dishId === dishId &&
                JSON.stringify(order.choices) === JSON.stringify(choices)
        );

        if (dishIndex === -1) {
            append({ dishId, choices, count: 1 });
        } else {
            const order = fields[dishIndex];
            update(dishIndex, { ...order, count: order.count + 1 });
        }
    };

    const decreaseOrderCount = (
        index: number,
        order: FieldArrayWithId<IOrderForm, 'order', 'id'>
    ) => {
        update(index, {
            ...order,
            count: order.count - 1,
        });
    };

    const increaseOrderCount = (
        index: number,
        order: FieldArrayWithId<IOrderForm, 'order', 'id'>
    ) => {
        update(index, {
            ...order,
            count: order.count + 1,
        });
    };

    const deleteFromBag = (fieldId: string) => {
        const index = fields.findIndex((field) => field.id === fieldId);
        if (index > -1) {
            remove(index);
        }
    };

    return (
        <div>
            <RestaurantBanner
                coverImage={data?.restaurant.result?.coverImage ?? ''}
                name={data?.restaurant.result?.name ?? 'loading...'}
                address={data?.restaurant.result?.address ?? 'loading...'}
            />
            {data?.restaurant.result?.menu && (
                <div className='grid xl:grid-cols-4 mx-5'>
                    <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-x-5 gap-y-10 xl:pr-5'>
                        {data.restaurant.result.menu.map((dish, idx) => (
                            <Dish
                                addItemToCart={addItemToCart}
                                id={dish.id}
                                name={dish.name}
                                price={dish.price}
                                description={dish.description}
                                key={idx}
                                options={dish.dishOptions ?? []}
                            />
                        ))}
                    </div>

                    {meData?.me && (
                        <ShoppingBag
                            onSubmit={handleSubmit(onValid)}
                            fields={fields}
                            menu={data.restaurant.result.menu}
                            loading={loading}
                            isValid={fields.length > 0}
                            decreaseOrderCount={decreaseOrderCount}
                            increaseOrderCount={increaseOrderCount}
                            deleteFromBag={deleteFromBag}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
