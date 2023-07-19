/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
    DateTime: { input: any; output: any };
};

export type CancelOrderOutput = {
    __typename?: 'CancelOrderOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type Category = {
    __typename?: 'Category';
    createdAt: Scalars['DateTime']['output'];
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    restaurantCount: Scalars['Int']['output'];
    restaurants: Array<Restaurant>;
    updatedAt: Scalars['DateTime']['output'];
};

export type CreateAccountOutput = {
    __typename?: 'CreateAccountOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type CreateCategoryOutput = {
    __typename?: 'CreateCategoryOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type CreateDishOutput = {
    __typename?: 'CreateDishOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type CreateOrderOutput = {
    __typename?: 'CreateOrderOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type CreateRestaurantOutput = {
    __typename?: 'CreateRestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type DeleteDishOutput = {
    __typename?: 'DeleteDishOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type DeleteRestaurantOutput = {
    __typename?: 'DeleteRestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type Dish = {
    __typename?: 'Dish';
    createdAt: Scalars['DateTime']['output'];
    description?: Maybe<Scalars['String']['output']>;
    dishOptions?: Maybe<Array<DishOption>>;
    id: Scalars['Int']['output'];
    name: Scalars['String']['output'];
    photo: Scalars['String']['output'];
    price: Scalars['Int']['output'];
    restaurant: Restaurant;
    restaurantId: Scalars['Int']['output'];
    updatedAt: Scalars['DateTime']['output'];
};

export type DishOption = {
    __typename?: 'DishOption';
    extra: Scalars['Int']['output'];
    name: Scalars['String']['output'];
};

export type EditDishOutput = {
    __typename?: 'EditDishOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type EditOrderForDeliveryOutput = {
    __typename?: 'EditOrderForDeliveryOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type EditOrderForOwnerOutput = {
    __typename?: 'EditOrderForOwnerOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type EditProfileOutput = {
    __typename?: 'EditProfileOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    user?: Maybe<User>;
};

export type EditRestaurantOutput = {
    __typename?: 'EditRestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type LoginOutPut = {
    __typename?: 'LoginOutPut';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    cancelOrder: CancelOrderOutput;
    createAccount: CreateAccountOutput;
    createCategory: CreateCategoryOutput;
    createDish: CreateDishOutput;
    createOrder: CreateOrderOutput;
    createRestaurant: CreateRestaurantOutput;
    deleteDish: DeleteDishOutput;
    deleteRestaurant: DeleteRestaurantOutput;
    editDish: EditDishOutput;
    editOrderForDelivery: EditOrderForDeliveryOutput;
    editOrderForOwner: EditOrderForOwnerOutput;
    editProfile: EditProfileOutput;
    editRestaurant: EditRestaurantOutput;
    login: LoginOutPut;
    verifyEmailwithCode: VerifyCodeOutput;
};

export type MutationCancelOrderArgs = {
    id: Scalars['Int']['input'];
};

export type MutationCreateAccountArgs = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    role: UserRole;
};

export type MutationCreateCategoryArgs = {
    name: Scalars['String']['input'];
};

export type MutationCreateDishArgs = {
    description?: InputMaybe<Scalars['String']['input']>;
    dishOptions?: InputMaybe<Array<DishOption>>;
    name: Scalars['String']['input'];
    photo: Scalars['String']['input'];
    price: Scalars['Int']['input'];
    restaurantId: Scalars['Int']['input'];
};

export type MutationCreateOrderArgs = {
    address: Scalars['String']['input'];
    items: Array<CreateOrderItemInput>;
    restaurantId: Scalars['Int']['input'];
    total?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCreateRestaurantArgs = {
    address: Scalars['String']['input'];
    categoryId: Scalars['Int']['input'];
    coverImage?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
};

export type MutationDeleteDishArgs = {
    id: Scalars['Int']['input'];
};

export type MutationDeleteRestaurantArgs = {
    id: Scalars['Int']['input'];
};

export type MutationEditDishArgs = {
    description?: InputMaybe<Scalars['String']['input']>;
    dishOptions?: InputMaybe<Array<DishOption>>;
    id: Scalars['Int']['input'];
    name?: InputMaybe<Scalars['String']['input']>;
    photo?: InputMaybe<Scalars['String']['input']>;
    price?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationEditOrderForDeliveryArgs = {
    id: Scalars['Int']['input'];
    status?: InputMaybe<OrderStatusForDelivery>;
};

export type MutationEditOrderForOwnerArgs = {
    id: Scalars['Int']['input'];
    status: OrderStatusForOwner;
};

export type MutationEditProfileArgs = {
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditRestaurantArgs = {
    address?: InputMaybe<Scalars['String']['input']>;
    categoryId?: InputMaybe<Scalars['Int']['input']>;
    coverImage?: InputMaybe<Scalars['String']['input']>;
    name?: InputMaybe<Scalars['String']['input']>;
    restaurantId: Scalars['Int']['input'];
};

export type MutationLoginArgs = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
};

export type MutationVerifyEmailwithCodeArgs = {
    code: Scalars['String']['input'];
};

export type Order = {
    __typename?: 'Order';
    address: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    customer?: Maybe<User>;
    customerId: Scalars['Int']['output'];
    driver?: Maybe<User>;
    driverId?: Maybe<Scalars['Int']['output']>;
    id: Scalars['Int']['output'];
    items: Array<OrderItem>;
    restaurant?: Maybe<Restaurant>;
    restaurantId: Scalars['Int']['output'];
    status: OrderStatus;
    total: Scalars['Int']['output'];
    updatedAt: Scalars['DateTime']['output'];
};

export type OrderItem = {
    __typename?: 'OrderItem';
    choices?: Maybe<Array<OrderItemOption>>;
    createdAt: Scalars['DateTime']['output'];
    dish: Dish;
    id: Scalars['Int']['output'];
    updatedAt: Scalars['DateTime']['output'];
};

export type OrderItemOption = {
    __typename?: 'OrderItemOption';
    name: Scalars['String']['output'];
};

export type OrderOutput = {
    __typename?: 'OrderOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Order>;
};

export enum OrderStatus {
    Canceled = 'Canceled',
    Cooked = 'Cooked',
    Cooking = 'Cooking',
    Delivered = 'Delivered',
    Pending = 'Pending',
    PickedUp = 'PickedUp',
}

export enum OrderStatusForDelivery {
    Delivered = 'Delivered',
    PickedUp = 'PickedUp',
}

export enum OrderStatusForOwner {
    Cooked = 'Cooked',
    Cooking = 'Cooking',
}

export type OrdersOutput = {
    __typename?: 'OrdersOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Array<Order>>;
    totalItems?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PublicUser = {
    __typename?: 'PublicUser';
    email: Scalars['String']['output'];
    id: Scalars['Int']['output'];
    role: UserRole;
};

export type Query = {
    __typename?: 'Query';
    me: User;
    order: OrderOutput;
    orders: OrdersOutput;
    restaurant: RestaurantOutput;
    restaurants: RestaurantsOutput;
    searchRestaurant: SearchRestaurantOutput;
    seeCategories: SeeCategoriesOutput;
    userProfile: UserProfileOutput;
};

export type QueryOrderArgs = {
    id: Scalars['Int']['input'];
};

export type QueryOrdersArgs = {
    page?: Scalars['Int']['input'];
    status?: InputMaybe<OrderStatus>;
};

export type QueryRestaurantArgs = {
    id: Scalars['Int']['input'];
};

export type QueryRestaurantsArgs = {
    categoryId: Scalars['Int']['input'];
    page?: Scalars['Int']['input'];
};

export type QuerySearchRestaurantArgs = {
    page?: Scalars['Int']['input'];
    query: Scalars['String']['input'];
};

export type QueryUserProfileArgs = {
    userId: Scalars['Int']['input'];
};

export type Restaurant = {
    __typename?: 'Restaurant';
    address: Scalars['String']['output'];
    category?: Maybe<Category>;
    coverImage?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    id: Scalars['Int']['output'];
    menu: Array<Dish>;
    name: Scalars['String']['output'];
    owner: User;
    ownerId: Scalars['Int']['output'];
    updatedAt: Scalars['DateTime']['output'];
};

export type RestaurantOutput = {
    __typename?: 'RestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Restaurant>;
};

export type RestaurantsOutput = {
    __typename?: 'RestaurantsOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Array<Restaurant>>;
    totalItems?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SearchRestaurantOutput = {
    __typename?: 'SearchRestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Array<Restaurant>>;
    totalItems?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SeeCategoriesOutput = {
    __typename?: 'SeeCategoriesOutput';
    categories?: Maybe<Array<Category>>;
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type Subscription = {
    __typename?: 'Subscription';
    cookedOrders: Order;
    orderUpdates: Order;
    pendingOrders: Order;
};

export type SubscriptionOrderUpdatesArgs = {
    id: Scalars['Int']['input'];
};

export type User = {
    __typename?: 'User';
    createdAt: Scalars['DateTime']['output'];
    email: Scalars['String']['output'];
    id: Scalars['Int']['output'];
    orders: Array<Order>;
    password: Scalars['String']['output'];
    restaurants: Array<Restaurant>;
    rides: Array<Order>;
    role: UserRole;
    updatedAt: Scalars['DateTime']['output'];
    verified: Scalars['Boolean']['output'];
};

export type UserProfileOutput = {
    __typename?: 'UserProfileOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    user?: Maybe<PublicUser>;
};

export enum UserRole {
    Client = 'Client',
    Delivery = 'Delivery',
    Owner = 'Owner',
}

export type VerifyCodeOutput = {
    __typename?: 'VerifyCodeOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
};

export type CreateOrderItemInput = {
    choices?: InputMaybe<Array<OrderItemOption>>;
    dishId: Scalars['Int']['input'];
};

export type CreateAccountMutationVariables = Exact<{
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    role: UserRole;
}>;

export type CreateAccountMutation = {
    __typename?: 'Mutation';
    createAccount: {
        __typename?: 'CreateAccountOutput';
        error?: string | null;
        ok: boolean;
    };
};

export type LoginMutationVariables = Exact<{
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
}>;

export type LoginMutation = {
    __typename?: 'Mutation';
    login: {
        __typename?: 'LoginOutPut';
        error?: string | null;
        ok: boolean;
        token?: string | null;
    };
};

export const CreateAccountDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'createAccount' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'email' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'role' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'UserRole' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createAccount' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'email' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'password' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'password' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'role' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'role' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    CreateAccountMutation,
    CreateAccountMutationVariables
>;
export const LoginDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'login' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'email' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'String' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'login' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'email' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'password' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'password' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'token' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
