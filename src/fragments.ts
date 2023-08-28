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

export const ORDER_FULL_FRAGMENT = gql`
    fragment OrderFullFragment on Order {
        id
        address
        createdAt
        status
        total
        customer {
            id
            email
        }
        restaurant {
            id
            name
        }
        items {
            id
            choices {
                name
            }
            dish {
                id
                name
                price
            }
        }
        driver {
            id
            email
        }
    }
`;

export const ORDER_PART_FRAGMENT = gql`
    fragment OrderPartFragment on Order {
        id
        address
        createdAt
        status
        total
        restaurant {
            id
            name
        }
        items {
            id
            choices {
                name
            }
            dish {
                id
                name
            }
        }
    }
`;

export const ORDER_UPDATE_FRAGMENT = gql`
    fragment OrderUpdateFragment on Order {
        id
        status
        driver {
            id
            email
        }
    }
`;
