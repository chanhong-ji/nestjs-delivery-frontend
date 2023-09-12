import { AcceptedOrdersSubscription } from '../gql/graphql';

export type AcceptedOrder = AcceptedOrdersSubscription['acceptedOrders'];

type IProps = AcceptedOrder & {
    onClickAcceptButton: () => void;
    onClickRejectButton: () => void;
};

export default function NewOrder(props: IProps) {
    const formatDate = (date: Date) => {
        return new Date(date)
            .toLocaleTimeString()
            .split(':')
            .slice(0, 2)
            .join(':');
    };

    return (
        <div
            id='new_order'
            className='border-bottom-white w-full text-white py-2'
        >
            <div className='text-xl mb-2'>{formatDate(props.createdAt)}</div>
            <div className='text-2xl mb-1'>
                {props.items?.at(0)?.dish.name} 외 {props.items.length}개
            </div>
            <div className='text-slate-400 mb-1'>{props.address}</div>
            <div className='text-slate-400 mb-1'>{props.total} 원</div>
            <div className='w-full grid grid-cols-2 gap-2'>
                <button
                    className='w-full bg-slate-300 rounded-sm text-black hover:bg-blue-900 p-3 hover:cursor-pointer text-lg font-bold hover:text-white'
                    onClick={() => {
                        props.onClickAcceptButton();
                    }}
                >
                    수락
                </button>

                <button
                    className='w-full bg-slate-300 rounded-sm text-black hover:bg-blue-900 p-3 hover:cursor-pointer text-lg font-bold hover:text-white'
                    onClick={() => {
                        props.onClickRejectButton();
                    }}
                >
                    거절
                </button>
            </div>
        </div>
    );
}
