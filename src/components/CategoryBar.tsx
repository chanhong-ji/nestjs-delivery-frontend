import { Link } from 'react-router-dom';

interface IProps {
    categories: Array<{
        __typename?: 'Category';
        id: number;
        name: string;
        restaurantCount: number;
    }>;
}

export default function CategoryBar({ categories }: IProps) {
    return (
        <div className='w-full flex justify-center'>
            <div className='mt-7 max-w-3xl w-full grid grid-cols-2 lg:grid-cols-none lg:grid-flow-col lg:divide-y-0 divide-y-2 divide-x-2 ring-1 rounded-lg ring-gray-200 shadow-md'>
                {categories.map((categoryData) => (
                    <Link
                        to={`categories/${categoryData.id}`}
                        key={categoryData.id}
                    >
                        <div className='h-12 w-full flex justify-center items-center text-base text-gray-600 font-semibold hover:bg-blue-200 hover:cursor-pointer'>
                            {categoryData.name}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
