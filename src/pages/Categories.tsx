import { gql, useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsQuery, RestaurantsQueryVariables } from '../gql/graphql';
import Pagination from '../components/Pagination';
import Restaurants from './Restaurants';
import errorLog from '../errorLog';

const RESTAURANTS_QUERY = gql`
    query restaurants($categoryId: Int!, $page: Int!) {
        restaurants(categoryId: $categoryId, page: $page) {
            ok
            result {
                id
                name
                coverImage
            }
            totalItems
            totalPages
            error
        }
    }
`;

export default function Categories() {
    const { id } = useParams() as { id: string };
    const [page, setPage] = useState(1);
    const {
        data: RestaurantsData,
        refetch: refetchRestaurants,
        loading,
    } = useQuery<RestaurantsQuery, RestaurantsQueryVariables>(
        RESTAURANTS_QUERY,
        {
            variables: { categoryId: +id, page },
            onError(error) {
                errorLog('getRestaurants', error);
            },
        }
    );

    const onNextPageClick = () => setPage((curr) => curr + 1);
    const onPrevPageClick = () => setPage((curr) => curr - 1);

    useEffect(() => {
        refetchRestaurants({ page });
    }, [page]);

    return (
        <div className='center-box'>
            {RestaurantsData?.restaurants.result && (
                <Restaurants
                    restaurants={RestaurantsData.restaurants.result}
                    loading={loading}
                />
            )}

            {RestaurantsData?.restaurants.totalPages &&
            RestaurantsData.restaurants.totalPages > 0 ? (
                <Pagination
                    page={page}
                    totalPages={RestaurantsData.restaurants.totalPages}
                    onNextPageClick={onNextPageClick}
                    onPrevPageClick={onPrevPageClick}
                />
            ) : (
                <></>
            )}
        </div>
    );
}
