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

export const DISH_FRAGMENT = gql`
    fragment DishFragment on Dish {
        id
        name
        photo
        price
        description
        dishOptions {
            extra
            name
        }
    }
`;
