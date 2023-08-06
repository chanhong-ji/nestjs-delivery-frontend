interface IProps {
    description: string | null | undefined;
    name: string;
    price: number;
}

export default function Dish({ description, name, price }: IProps) {
    return (
        <div className=' px-8 py-4 border cursor-pointer hover:border-gray-800 transition-all '>
            <div className='mb-5'>
                <h3 className='text-lg font-medium '>{name}</h3>
                <h4 className='font-medium'>{description}</h4>
            </div>
            <span>${price}</span>
        </div>
    );
}
