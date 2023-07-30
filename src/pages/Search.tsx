import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gql, useLazyQuery } from '@apollo/client';
import {
    SearchRestaurantQuery,
    SearchRestaurantQueryVariables,
} from '../gql/graphql';
import errorLog from '../errorLog';
import { RESTAURANT_FRAGMENT } from '../fragments';
import Restaurants from './Restaurants';
import Pagination from '../components/Pagination';

const SEARCH_RESTAURANT_QUERY = gql`
    query searchRestaurant($query: String!, $page: Int!) {
        searchRestaurant(query: $query, page: $page) {
            ok
            error
            totalItems
            totalPages
            result {
                ...RestaurantFragment
            }
        }
    }
    ${RESTAURANT_FRAGMENT}
`;

export default function Search() {
    const location = useLocation();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const [searchRestaurant, { data: searchData, loading, refetch }] =
        useLazyQuery<SearchRestaurantQuery, SearchRestaurantQueryVariables>(
            SEARCH_RESTAURANT_QUERY,
            {
                onError(error) {
                    errorLog('searchRestaurant', error);
                },
            }
        );

    useEffect(() => {
        const keyword = location.search.split('?keyword=').at(-1);
        if (!keyword) {
            return navigate('/', { replace: true });
        }

        searchRestaurant({
            variables: { query: decodeURI(keyword), page: 1 },
        });
    }, [location]);

    useEffect(() => {
        refetch({ page });
    }, [page]);

    return (
        <div className='center-box'>
            {searchData?.searchRestaurant.result && (
                <Restaurants
                    restaurants={searchData.searchRestaurant.result}
                    loading={loading}
                />
            )}

            {searchData?.searchRestaurant.totalPages &&
            searchData.searchRestaurant.totalPages > 0 ? (
                <Pagination
                    page={page}
                    totalPages={searchData.searchRestaurant.totalPages}
                    onNextPageClick={() => setPage((curr) => curr + 1)}
                    onPrevPageClick={() => setPage((curr) => curr - 1)}
                />
            ) : (
                <></>
            )}
        </div>
    );
}
