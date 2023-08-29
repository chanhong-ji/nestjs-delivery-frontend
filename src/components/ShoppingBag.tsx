import { FieldArrayWithId } from 'react-hook-form';
import { IOrderForm } from '../pages/RestaurantPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { useMe } from '../hooks/useMe';

interface IProps {
    fields: FieldArrayWithId<IOrderForm, 'order', 'id'>[];
    menu: Array<{
        __typename?: 'Dish';
        id: number;
        name: string;
        photo: string;
        price: number;
        description?: string | null;
        dishOptions?: Array<{
            __typename?: 'DishOption';
            extra: number;
            name: string;
        }> | null;
    }>;
    loading: boolean;
    isValid: boolean;
    onSubmit: () => void;
    decreaseOrderCount: (
        index: number,
        order: FieldArrayWithId<IOrderForm, 'order', 'id'>
    ) => void;
    increaseOrderCount: (
        index: number,
        order: FieldArrayWithId<IOrderForm, 'order', 'id'>
    ) => void;
    deleteFromBag: (fieldId: string) => void;
}

export default function ShoppingBag({
    onSubmit,
    fields,
    menu,
    loading,
    isValid,
    decreaseOrderCount,
    increaseOrderCount,
    deleteFromBag,
}: IProps) {
    const { data: meData } = useMe();
    return (
        <div className='p-7 bg-slate-50 border transition-all h-min xl:col-span-1 col-span-3 mt-5'>
            <div
                id='address'
                className='w-full mb-3 text-sm p-2 border-gray-100 border-2 rounded-sm'
            >
                주소지: {meData?.me.address}
            </div>
            <form onSubmit={onSubmit}>
                <h4 className='text-xl font-semibold'>장바구니</h4>
                {fields.map((order, index) => {
                    const dish = menu.find(
                        (value) => value.id === order.dishId
                    );
                    if (!dish) return null;

                    let orderTotal = dish.price;

                    return (
                        <div
                            key={order.id}
                            className='mt-2 flex flex-col border-t-2 border-gray-300 pt-2'
                        >
                            <div className='flex justify-between mb-1'>
                                <h3
                                    id='title'
                                    className='font-semibold text-sm'
                                >
                                    {dish.name}
                                </h3>
                                <button
                                    className='text-gray-400 hover:text-blue-900'
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteFromBag(order.id);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faDeleteLeft} />
                                </button>
                            </div>

                            <div className='flex'>
                                <div
                                    id='photo'
                                    style={{
                                        backgroundImage: `url(${dish.photo})`,
                                    }}
                                    className='bg-slate-400 h-10 w-10 bg-cover rounded-xl bg-center mr-2'
                                ></div>
                                <div id='detail' className=''>
                                    {order.choices?.map((choice, idx) => {
                                        orderTotal +=
                                            dish.dishOptions?.find(
                                                (option) =>
                                                    option.name === choice
                                            )?.extra ?? 0;
                                        return (
                                            <div
                                                className='text-xs text-gray-500 mb-2'
                                                key={idx}
                                            >
                                                • {choice}
                                            </div>
                                        );
                                    })}
                                    <div>{orderTotal * order.count} 원</div>
                                </div>
                            </div>

                            <div
                                id='countButton'
                                className='place-self-end grid grid-cols-3 gap-2'
                            >
                                <button
                                    onClick={(event) => {
                                        event.preventDefault();
                                        decreaseOrderCount(index, order);
                                    }}
                                    className=''
                                    disabled={order.count <= 1}
                                >
                                    -
                                </button>
                                <div>{order.count}</div>
                                <button
                                    className=''
                                    onClick={(event) => {
                                        event.preventDefault();
                                        increaseOrderCount(index, order);
                                    }}
                                    disabled={order.count >= 10}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    );
                })}
                <button
                    type='submit'
                    className='button w-full py-3 mt-4'
                    disabled={loading || !isValid}
                >
                    {loading ? '주문 처리 중...' : '주문하기'}
                </button>
            </form>
        </div>
    );
}
