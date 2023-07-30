import { gql } from '@apollo/client';

export const RESTAURANT_FRAGMENT = gql`
    fragment RestaurantFragment on Restaurant {
        id
        name
        address
        coverImage
        category {
            name
            id
        }
    }
`;
