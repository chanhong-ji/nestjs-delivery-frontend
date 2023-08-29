import { gql, useQuery } from '@apollo/client';
import {
    SeeCategoriesQuery,
    SeeCategoriesQueryVariables,
} from '../gql/graphql';
import CategoryBar from '../components/CategoryBar';
import { Outlet } from 'react-router-dom';

const SEE_CATEGORIES_QUERY = gql`
    query seeCategories {
        seeCategories {
            categories {
                id
                name
                restaurantCount
            }
            ok
            error
        }
    }
`;

export default function Home() {
    const { data: categoriesData } = useQuery<
        SeeCategoriesQuery,
        SeeCategoriesQueryVariables
    >(SEE_CATEGORIES_QUERY);

    return (
        <div className='center-box'>
            {categoriesData?.seeCategories.categories && (
                <CategoryBar
                    categories={categoriesData.seeCategories.categories}
                />
            )}
            <Outlet />
        </div>
    );
}
