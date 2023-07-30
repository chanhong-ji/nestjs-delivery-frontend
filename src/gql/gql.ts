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
    "\n    fragment RestaurantFragment on Restaurant {\n        id\n        name\n        address\n        coverImage\n        category {\n            name\n            id\n        }\n    }\n": types.RestaurantFragmentFragmentDoc,
    "\n    query me {\n        me {\n            id\n            email\n            role\n            verified\n        }\n    }\n": types.MeDocument,
    "\n    query restaurants($categoryId: Int!, $page: Int!) {\n        restaurants(categoryId: $categoryId, page: $page) {\n            ok\n            result {\n                id\n                name\n                coverImage\n            }\n            totalItems\n            totalPages\n            error\n        }\n    }\n": types.RestaurantsDocument,
    "\n    mutation createAccount(\n        $email: String!\n        $password: String!\n        $role: UserRole!\n    ) {\n        createAccount(email: $email, password: $password, role: $role) {\n            error\n            ok\n        }\n    }\n": types.CreateAccountDocument,
    "\n    query seeCategories {\n        seeCategories {\n            categories {\n                id\n                name\n                restaurantCount\n            }\n            ok\n            error\n        }\n    }\n": types.SeeCategoriesDocument,
    "\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n            error\n            ok\n            token\n        }\n    }\n": types.LoginDocument,
    "\n    query restaurant($restaurantId: Int!) {\n        restaurant(id: $restaurantId) {\n            ok\n            error\n            result {\n                id\n                name\n                category {\n                    id\n                    name\n                }\n                coverImage\n                address\n                menu {\n                    id\n                    name\n                    photo\n                    price\n                    dishOptions {\n                        extra\n                        name\n                    }\n                    description\n                }\n            }\n        }\n    }\n": types.RestaurantDocument,
    "\n    query searchRestaurant($query: String!, $page: Int!) {\n        searchRestaurant(query: $query, page: $page) {\n            ok\n            error\n            totalItems\n            totalPages\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n    \n": types.SearchRestaurantDocument,
    "\n    mutation verifyEmailWithCode($code: String!) {\n        verifyEmailwithCode(code: $code) {\n            error\n            ok\n        }\n    }\n": types.VerifyEmailWithCodeDocument,
    "\n    mutation editProfile($email: String, $password: String) {\n        editProfile(email: $email, password: $password) {\n            error\n            ok\n            user {\n                email\n            }\n        }\n    }\n": types.EditProfileDocument,
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
export function graphql(source: "\n    fragment RestaurantFragment on Restaurant {\n        id\n        name\n        address\n        coverImage\n        category {\n            name\n            id\n        }\n    }\n"): (typeof documents)["\n    fragment RestaurantFragment on Restaurant {\n        id\n        name\n        address\n        coverImage\n        category {\n            name\n            id\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query me {\n        me {\n            id\n            email\n            role\n            verified\n        }\n    }\n"): (typeof documents)["\n    query me {\n        me {\n            id\n            email\n            role\n            verified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query restaurants($categoryId: Int!, $page: Int!) {\n        restaurants(categoryId: $categoryId, page: $page) {\n            ok\n            result {\n                id\n                name\n                coverImage\n            }\n            totalItems\n            totalPages\n            error\n        }\n    }\n"): (typeof documents)["\n    query restaurants($categoryId: Int!, $page: Int!) {\n        restaurants(categoryId: $categoryId, page: $page) {\n            ok\n            result {\n                id\n                name\n                coverImage\n            }\n            totalItems\n            totalPages\n            error\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createAccount(\n        $email: String!\n        $password: String!\n        $role: UserRole!\n    ) {\n        createAccount(email: $email, password: $password, role: $role) {\n            error\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation createAccount(\n        $email: String!\n        $password: String!\n        $role: UserRole!\n    ) {\n        createAccount(email: $email, password: $password, role: $role) {\n            error\n            ok\n        }\n    }\n"];
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
export function graphql(source: "\n    query restaurant($restaurantId: Int!) {\n        restaurant(id: $restaurantId) {\n            ok\n            error\n            result {\n                id\n                name\n                category {\n                    id\n                    name\n                }\n                coverImage\n                address\n                menu {\n                    id\n                    name\n                    photo\n                    price\n                    dishOptions {\n                        extra\n                        name\n                    }\n                    description\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query restaurant($restaurantId: Int!) {\n        restaurant(id: $restaurantId) {\n            ok\n            error\n            result {\n                id\n                name\n                category {\n                    id\n                    name\n                }\n                coverImage\n                address\n                menu {\n                    id\n                    name\n                    photo\n                    price\n                    dishOptions {\n                        extra\n                        name\n                    }\n                    description\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query searchRestaurant($query: String!, $page: Int!) {\n        searchRestaurant(query: $query, page: $page) {\n            ok\n            error\n            totalItems\n            totalPages\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n    \n"): (typeof documents)["\n    query searchRestaurant($query: String!, $page: Int!) {\n        searchRestaurant(query: $query, page: $page) {\n            ok\n            error\n            totalItems\n            totalPages\n            result {\n                ...RestaurantFragment\n            }\n        }\n    }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation verifyEmailWithCode($code: String!) {\n        verifyEmailwithCode(code: $code) {\n            error\n            ok\n        }\n    }\n"): (typeof documents)["\n    mutation verifyEmailWithCode($code: String!) {\n        verifyEmailwithCode(code: $code) {\n            error\n            ok\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation editProfile($email: String, $password: String) {\n        editProfile(email: $email, password: $password) {\n            error\n            ok\n            user {\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation editProfile($email: String, $password: String) {\n        editProfile(email: $email, password: $password) {\n            error\n            ok\n            user {\n                email\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;