import { useNavigate } from 'react-router-dom';
import OrderStatusBlock from './OrderStatusBlock';
import { Order } from '../pages/owner/Orders';

interface IProps {
    idx: number;
    order: Order;
}

export default function OrderBlock(props: IProps) {
    const navigate = useNavigate();

    return (
        <div className='max-w-lg w-full min-h-fit mb-5 shadow-sm shadow-slate-500 p-3 bg-slate-100'>
            <div className='flex justify-between'>
                <span className='font-bold text-xl mb-2'>
                    {props.order.restaurant?.name}
                </span>
                <div>
                    <button
                        className='mt-2 text-sm underline mr-2'
                        onClick={() => {
                            navigate(`/orders/${props.order.id}`);
                        }}
                    >
                        상세정보
                    </button>
                    <span className='border rounded-md p-2 bg-slate-400 text-white w-fit'>
                        {props.idx + 1} 번
                    </span>
                </div>
            </div>
            <div id='createdAt' className='text-sm'>
                {new Date(props.order.createdAt).toLocaleString()}
            </div>

            <div id='address' className='mb-2'>
                주소: {props.order.address}
            </div>
            <div id='items'>
                {props.order.items.map((item) => (
                    <div
                        id='item'
                        key={item.id}
                        className='border-t-slate-200 border-t-2'
                    >
                        <div
                            id='title'
                            className='text-sm font-semibold text-slate-700 mt-1 mb-1'
                        >
                            {item.dish.name}
                        </div>
                        <div id='detail' className=''>
                            {item.choices?.map((choice, idx) => (
                                <div
                                    className='text-xs text-gray-500 mb-2'
                                    key={'choice' + idx}
                                >
                                    • {choice.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div id='total' className=' font-semibold text-sm mb-3'>
                    {props.order.total} 원
                </div>
            </div>

            <OrderStatusBlock
                id={+props.order.id}
                status={props.order.status}
                key={props.idx}
            />
            <div></div>
        </div>
    );
}
