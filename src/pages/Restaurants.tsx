import RestaurantCompo from '../components/RestaurantCompo';
import { UserRole } from '../gql/graphql';

interface IProps {
    restaurants: Array<{
        __typename?: 'Restaurant';
        id: number;
        name: string;
        coverImage?: string | null;
    }>;
    loading: boolean;
    role?: UserRole;
}

export default function Restaurants({ restaurants, role }: IProps) {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6 mt-10 lg:p-10 p-2'>
            {restaurants.map((restaurant) => (
                <RestaurantCompo
                    id={restaurant.id}
                    name={restaurant.name}
                    coverImage={restaurant.coverImage}
                    key={restaurant.id + ''}
                    role={role}
                />
            ))}
        </div>
    );
}
