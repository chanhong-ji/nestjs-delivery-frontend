/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    \n    subscription orderUpdates($orderId: Int!) {\n        orderUpdates(id: $orderId) {\n            ...OrderUpdateFragment\n        }\n    }\n": types.OrderUpdatesDocument,
    "\n    \n    query order($orderId: Int!) {\n        order(id: $orderId) {\n            ok\n            error\n            result {\n                ...OrderFullFragment\n            }\n        }\n    }\n": types.OrderDocument,
    "\n    mutation editOrderForOwner(\n        $editOrderForOwnerId: Int!\n        $status: OrderStatusForOwner!\n    ) {\n        editOrderForOwner(id: $editOrderForOwnerId, status: $status) {\n            ok\n            error\n        }\n    }\n": types.EditOrderForOwnerDocument,
    "\n    fragment RestaurantFragment on Restaurant {\n        id\n        name\n        address\n        coverImage\n        category {\n            name\n            id\n        }\n    }\n": types.RestaurantFragmentFragmentDoc,
    "\n    fragment DishFragment on Dish {\n        id\n        name\n        photo\n        price\n        description\n        dishOptions {\n            extra\n            name\n        }\n    }\n": types.DishFragmentFragmentDoc,
    "\n    fragment OrderFullFragment on Order {\n        id\n        address\n        createdAt\n        status\n        total\n        customer {\n            id\n            email\n        }\n        restaurant {\n            id\n            name\n        }\n        items {\n            id\n            choices {\n                name\n            }\n            dish {\n                id\n                name\n                price\n            }\n        }\n        driver {\n            id\n            email\n        }\n    }\n": types.OrderFullFragmentFragmentDoc,
    "\n    fragment OrderPartFragment on Order {\n        id\n        address\n        createdAt\n        status\n        total\n        restaurant {\n            id\n            name\n        }\n        items {\n            id\n            choices {\n                name\n            }\n            dish {\n                id\n                name\n            }\n        }\n    }\n": types.OrderPartFragmentFragmentDoc,
    "\n    fragment OrderUpdateFragment on Order {\n        id\n        status\n        driver {\n            id\n            email\n        }\n    }\n": types.OrderUpdateFragmentFragmentDoc,
    "\n    query me {\n        me {\n            id\n            email\n            role\n            verified\n            address\n        }\n    }\n": types.MeDocument,
    "\n    query restaurants($categoryId: Int!, $page: Int!) {\n        restaurants(categoryId: $categoryId, page: $page) {\n            ok\n            result {\n                id\n                name\n                coverImage\n            }\n            totalItems\n            totalPages\n            error\n        }\n    }\n": types.RestaurantsDocument,
    "\n    mutation verifyEmailWithCode($code: String!) {\n        verifyEmailwithCode(code: $code) {\n            error\n            ok\n        }\n    }\n": types.VerifyEmailWithCodeDocument,
    "\n    mutation createAccount(\n        $email: String!\n        $password: String!\n        $role: UserRole!\n        $address: String!\n    ) {\n        createAccount(\n            email: $email\n            password: $password\n            role: $role\n            address: $address\n        ) {\n            error\n            ok\n        }\n    }\n": types.CreateAccountDocument,
    "\n    mutation editProfile($email: String, $password: String, $address: String) {\n        editProfile(email: $email, password: $password, address: $address) {\n            error\n            ok\n            user {\n                email\n            }\n        }\n    }\n": types.EditProfileDocument,
    "\n    query seeCategories {\n        seeCategories {\n            categories {\n                id\n                name\n                restaurantCount\n            }\n            ok\n            error\n        }\n    }\n": types.SeeCategoriesDocument,
    "\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            error\n            ok\n            token\n        }\n    }\n": types.LoginDocument,
    "\n    \n    \n    query restaurant($restaurantId: Int!) {\n        restaurant(id: $restaurantId) {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n                menu {\n                    ...DishFragment\n                }\n            }\n        }\n    }\n": types.RestaurantDocument,
    "\n    mutation createOrder(\n        $restaurantId: Int!\n        $items: [createOrderItemInput!]!\n        $address: String!\n    ) {\n        createOrder(\n            restaurantId: $restaurantId\n            items: $items\n            address: $address\n        ) {\n            error\n            ok\n            orderId\n        }\n    }\n": types.CreateOrderDocument,
    "\n    query searchRestaurant($query: String!, $page: Int!) {\n        searchRestaurant(query: $query, page: $page) {\n            ok\n            error\n            totalItems\n            totalPages\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n    \n": types.SearchRestaurantDocument,
    "\n    mutation createDish(\n        $name: String!\n        $price: Int!\n        $photo: String!\n        $restaurantId: Int!\n        $description: String\n        $dishOptions: [dishOption!]\n    ) {\n        createDish(\n            name: $name\n            price: $price\n            photo: $photo\n            restaurantId: $restaurantId\n            description: $description\n            dishOptions: $dishOptions\n        ) {\n            ok\n            error\n        }\n    }\n": types.CreateDishDocument,
    "\n    mutation CreateRestaurant(\n        $name: String!\n        $address: String!\n        $categoryId: Int!\n        $coverImage: String\n    ) {\n        createRestaurant(\n            name: $name\n            address: $address\n            categoryId: $categoryId\n            coverImage: $coverImage\n        ) {\n            ok\n            error\n            restaurantId\n        }\n    }\n": types.CreateRestaurantDocument,
    "\n    \n    \n    query myRestaurant($myRestaurantId: Int!) {\n        myRestaurant(id: $myRestaurantId) {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n                menu {\n                    ...DishFragment\n                }\n            }\n        }\n    }\n": types.MyRestaurantDocument,
    "\n    \n    query MyRestaurants {\n        myRestaurants {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n": types.MyRestaurantsDocument,
    "\n    \n    subscription pendingOrders {\n        pendingOrders {\n            ...OrderPartFragment\n        }\n    }\n": types.PendingOrdersDocument,
    "\n    \n    query orders($page: Int!, $status: OrderStatus) {\n        orders(page: $page, status: $status) {\n            ok\n            error\n            totalPages\n            totalItems\n            result {\n                ...OrderPartFragment\n            }\n        }\n    }\n": types.OrdersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    subscription orderUpdates($orderId: Int!) {\n        orderUpdates(id: $orderId) {\n            ...OrderUpdateFragment\n        }\n    }\n"): (typeof documents)["\n    \n    subscription orderUpdates($orderId: Int!) {\n        orderUpdates(id: $orderId) {\n            ...OrderUpdateFragment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    query order($orderId: Int!) {\n        order(id: $orderId) {\n            ok\n            error\n            result {\n                ...OrderFullFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    \n    query order($orderId: Int!) {\n        order(id: $orderId) {\n            ok\n            error\n            result {\n                ...OrderFullFragment\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation editOrderForOwner(\n        $editOrderForOwnerId: Int!\n        $status: OrderStatusForOwner!\n    ) {\n        editOrderForOwner(id: $editOrderForOwnerId, status: $status) {\n            ok\n            error\n        }\n    }\n"): (typeof documents)["\n    mutation editOrderForOwner(\n        $editOrderForOwnerId: Int!\n        $status: OrderStatusForOwner!\n    ) {\n        editOrderForOwner(id: $editOrderForOwnerId, status: $status) {\n            ok\n            error\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment RestaurantFragment on Restaurant {\n        id\n        name\n        address\n        coverImage\n        category {\n            name\n            id\n        }\n    }\n"): (typeof documents)["\n    fragment RestaurantFragment on Restaurant {\n        id\n        name\n        address\n        coverImage\n        category {\n            name\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment DishFragment on Dish {\n        id\n        name\n        photo\n        price\n        description\n        dishOptions {\n            extra\n            name\n        }\n    }\n"): (typeof documents)["\n    fragment DishFragment on Dish {\n        id\n        name\n        photo\n        price\n        description\n        dishOptions {\n            extra\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment OrderFullFragment on Order {\n        id\n        address\n        createdAt\n        status\n        total\n        customer {\n            id\n            email\n        }\n        restaurant {\n            id\n            name\n        }\n        items {\n            id\n            choices {\n                name\n            }\n            dish {\n                id\n                name\n                price\n            }\n        }\n        driver {\n            id\n            email\n        }\n    }\n"): (typeof documents)["\n    fragment OrderFullFragment on Order {\n        id\n        address\n        createdAt\n        status\n        total\n        customer {\n            id\n            email\n        }\n        restaurant {\n            id\n            name\n        }\n        items {\n            id\n            choices {\n                name\n            }\n            dish {\n                id\n                name\n                price\n            }\n        }\n        driver {\n            id\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment OrderPartFragment on Order {\n        id\n        address\n        createdAt\n        status\n        total\n        restaurant {\n            id\n            name\n        }\n        items {\n            id\n            choices {\n                name\n            }\n            dish {\n                id\n                name\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment OrderPartFragment on Order {\n        id\n        address\n        createdAt\n        status\n        total\n        restaurant {\n            id\n            name\n        }\n        items {\n            id\n            choices {\n                name\n            }\n            dish {\n                id\n                name\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment OrderUpdateFragment on Order {\n        id\n        status\n        driver {\n            id\n            email\n        }\n    }\n"): (typeof documents)["\n    fragment OrderUpdateFragment on Order {\n        id\n        status\n        driver {\n            id\n            email\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query me {\n        me {\n            id\n            email\n            role\n            verified\n            address\n        }\n    }\n"): (typeof documents)["\n    query me {\n        me {\n            id\n            email\n            role\n            verified\n            address\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query restaurants($categoryId: Int!, $page: Int!) {\n        restaurants(categoryId: $categoryId, page: $page) {\n            ok\n            result {\n                id\n                name\n                coverImage\n            }\n            totalItems\n            totalPages\n            error\n        }\n    }\n"): (typeof documents)["\n    query restaurants($categoryId: Int!, $page: Int!) {\n        restaurants(categoryId: $categoryId, page: $page) {\n            ok\n            result {\n                id\n                name\n                coverImage\n            }\n            totalItems\n            totalPages\n            error\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation verifyEmailWithCode($code: String!) {\n        verifyEmailwithCode(code: $code) {\n            error\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation verifyEmailWithCode($code: String!) {\n        verifyEmailwithCode(code: $code) {\n            error\n            ok\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createAccount(\n        $email: String!\n        $password: String!\n        $role: UserRole!\n        $address: String!\n    ) {\n        createAccount(\n            email: $email\n            password: $password\n            role: $role\n            address: $address\n        ) {\n            error\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation createAccount(\n        $email: String!\n        $password: String!\n        $role: UserRole!\n        $address: String!\n    ) {\n        createAccount(\n            email: $email\n            password: $password\n            role: $role\n            address: $address\n        ) {\n            error\n            ok\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation editProfile($email: String, $password: String, $address: String) {\n        editProfile(email: $email, password: $password, address: $address) {\n            error\n            ok\n            user {\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation editProfile($email: String, $password: String, $address: String) {\n        editProfile(email: $email, password: $password, address: $address) {\n            error\n            ok\n            user {\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query seeCategories {\n        seeCategories {\n            categories {\n                id\n                name\n                restaurantCount\n            }\n            ok\n            error\n        }\n    }\n"): (typeof documents)["\n    query seeCategories {\n        seeCategories {\n            categories {\n                id\n                name\n                restaurantCount\n            }\n            ok\n            error\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            error\n            ok\n            token\n        }\n    }\n"): (typeof documents)["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            error\n            ok\n            token\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    \n    query restaurant($restaurantId: Int!) {\n        restaurant(id: $restaurantId) {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n                menu {\n                    ...DishFragment\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    \n    \n    query restaurant($restaurantId: Int!) {\n        restaurant(id: $restaurantId) {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n                menu {\n                    ...DishFragment\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createOrder(\n        $restaurantId: Int!\n        $items: [createOrderItemInput!]!\n        $address: String!\n    ) {\n        createOrder(\n            restaurantId: $restaurantId\n            items: $items\n            address: $address\n        ) {\n            error\n            ok\n            orderId\n        }\n    }\n"): (typeof documents)["\n    mutation createOrder(\n        $restaurantId: Int!\n        $items: [createOrderItemInput!]!\n        $address: String!\n    ) {\n        createOrder(\n            restaurantId: $restaurantId\n            items: $items\n            address: $address\n        ) {\n            error\n            ok\n            orderId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query searchRestaurant($query: String!, $page: Int!) {\n        searchRestaurant(query: $query, page: $page) {\n            ok\n            error\n            totalItems\n            totalPages\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n    \n"): (typeof documents)["\n    query searchRestaurant($query: String!, $page: Int!) {\n        searchRestaurant(query: $query, page: $page) {\n            ok\n            error\n            totalItems\n            totalPages\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createDish(\n        $name: String!\n        $price: Int!\n        $photo: String!\n        $restaurantId: Int!\n        $description: String\n        $dishOptions: [dishOption!]\n    ) {\n        createDish(\n            name: $name\n            price: $price\n            photo: $photo\n            restaurantId: $restaurantId\n            description: $description\n            dishOptions: $dishOptions\n        ) {\n            ok\n            error\n        }\n    }\n"): (typeof documents)["\n    mutation createDish(\n        $name: String!\n        $price: Int!\n        $photo: String!\n        $restaurantId: Int!\n        $description: String\n        $dishOptions: [dishOption!]\n    ) {\n        createDish(\n            name: $name\n            price: $price\n            photo: $photo\n            restaurantId: $restaurantId\n            description: $description\n            dishOptions: $dishOptions\n        ) {\n            ok\n            error\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateRestaurant(\n        $name: String!\n        $address: String!\n        $categoryId: Int!\n        $coverImage: String\n    ) {\n        createRestaurant(\n            name: $name\n            address: $address\n            categoryId: $categoryId\n            coverImage: $coverImage\n        ) {\n            ok\n            error\n            restaurantId\n        }\n    }\n"): (typeof documents)["\n    mutation CreateRestaurant(\n        $name: String!\n        $address: String!\n        $categoryId: Int!\n        $coverImage: String\n    ) {\n        createRestaurant(\n            name: $name\n            address: $address\n            categoryId: $categoryId\n            coverImage: $coverImage\n        ) {\n            ok\n            error\n            restaurantId\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    \n    query myRestaurant($myRestaurantId: Int!) {\n        myRestaurant(id: $myRestaurantId) {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n                menu {\n                    ...DishFragment\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    \n    \n    query myRestaurant($myRestaurantId: Int!) {\n        myRestaurant(id: $myRestaurantId) {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n                menu {\n                    ...DishFragment\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    query MyRestaurants {\n        myRestaurants {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    \n    query MyRestaurants {\n        myRestaurants {\n            ok\n            error\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    subscription pendingOrders {\n        pendingOrders {\n            ...OrderPartFragment\n        }\n    }\n"): (typeof documents)["\n    \n    subscription pendingOrders {\n        pendingOrders {\n            ...OrderPartFragment\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    \n    query orders($page: Int!, $status: OrderStatus) {\n        orders(page: $page, status: $status) {\n            ok\n            error\n            totalPages\n            totalItems\n            result {\n                ...OrderPartFragment\n            }\n        }\n    }\n"): (typeof documents)["\n    \n    query orders($page: Int!, $status: OrderStatus) {\n        orders(page: $page, status: $status) {\n            ok\n            error\n            totalPages\n            totalItems\n            result {\n                ...OrderPartFragment\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;