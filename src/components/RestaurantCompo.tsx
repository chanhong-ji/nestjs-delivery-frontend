import { Link } from 'react-router-dom';

interface IProps {
    id: number;
    name: string;
    coverImage: string | null | undefined;
}

export default function RestaurantCompo({ id, name, coverImage }: IProps) {
    return (
        <Link to={`/restaurants/${id}`}>
            <div className='w-full h-56 grid grid-rows-3 hover:cursor-pointer'>
                <div
                    style={{
                        backgroundImage: `url(${coverImage})`,
                    }}
                    className='row-span-2 bg-cover rounded-xl bg-center'
                ></div>
                <div className='p-2'>
                    <span className='text-xl'>{name}</span>
                </div>
            </div>
        </Link>
    );
}
