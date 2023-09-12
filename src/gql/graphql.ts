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
    orderId: Scalars['Int']['output'];
};

export type CreateRestaurantOutput = {
    __typename?: 'CreateRestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    restaurantId: Scalars['Int']['output'];
};

export type DeleteAccountOutput = {
    __typename?: 'DeleteAccountOutput';
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

export type DishOutput = {
    __typename?: 'DishOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Dish>;
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
    deleteAccount: DeleteAccountOutput;
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
    address: Scalars['String']['input'];
    dongCode?: InputMaybe<Scalars['String']['input']>;
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
    dongCode?: InputMaybe<Scalars['String']['input']>;
    items: Array<CreateOrderItemInput>;
    restaurantId: Scalars['Int']['input'];
    total?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationCreateRestaurantArgs = {
    address: Scalars['String']['input'];
    categoryId: Scalars['Int']['input'];
    coverImage?: InputMaybe<Scalars['String']['input']>;
    dongCode?: InputMaybe<Scalars['String']['input']>;
    name: Scalars['String']['input'];
};

export type MutationDeleteAccountArgs = {
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
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
    address?: InputMaybe<Scalars['String']['input']>;
    dongCode?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditRestaurantArgs = {
    address?: InputMaybe<Scalars['String']['input']>;
    categoryId?: InputMaybe<Scalars['Int']['input']>;
    coverImage?: InputMaybe<Scalars['String']['input']>;
    dongCode?: InputMaybe<Scalars['String']['input']>;
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

export type MyRestaurantOutput = {
    __typename?: 'MyRestaurantOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Restaurant>;
};

export type MyRestaurantsOutput = {
    __typename?: 'MyRestaurantsOutput';
    error?: Maybe<Scalars['String']['output']>;
    ok: Scalars['Boolean']['output'];
    result?: Maybe<Array<Restaurant>>;
};

export type Order = {
    __typename?: 'Order';
    address: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    customer?: Maybe<User>;
    customerId: Scalars['Int']['output'];
    dongCode?: Maybe<Scalars['String']['output']>;
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
    dish: DishOutput;
    me: User;
    myRestaurant: MyRestaurantOutput;
    myRestaurants: MyRestaurantsOutput;
    order: OrderOutput;
    orders: OrdersOutput;
    restaurant: RestaurantOutput;
    restaurants: RestaurantsOutput;
    searchRestaurant: SearchRestaurantOutput;
    seeCategories: SeeCategoriesOutput;
    userProfile: UserProfileOutput;
};

export type QueryDishArgs = {
    id: Scalars['Int']['input'];
};

export type QueryMyRestaurantArgs = {
    id: Scalars['Int']['input'];
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
    dongCode?: Maybe<Scalars['String']['output']>;
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
    acceptedOrders: Order;
    cookedOrders: Order;
    orderUpdates: Order;
    pendingOrders: Order;
};

export type SubscriptionOrderUpdatesArgs = {
    id: Scalars['Int']['input'];
};

export type User = {
    __typename?: 'User';
    address: Scalars['String']['output'];
    createdAt: Scalars['DateTime']['output'];
    dongCode?: Maybe<Scalars['String']['output']>;
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

export type OrderUpdatesSubscriptionVariables = Exact<{
    orderId: Scalars['Int']['input'];
}>;

export type OrderUpdatesSubscription = {
    __typename?: 'Subscription';
    orderUpdates: {
        __typename?: 'Order';
        id: number;
        status: OrderStatus;
        driver?: { __typename?: 'User'; id: number; email: string } | null;
    };
};

export type OrderQueryVariables = Exact<{
    orderId: Scalars['Int']['input'];
}>;

export type OrderQuery = {
    __typename?: 'Query';
    order: {
        __typename?: 'OrderOutput';
        ok: boolean;
        error?: string | null;
        result?: {
            __typename?: 'Order';
            id: number;
            address: string;
            createdAt: any;
            status: OrderStatus;
            total: number;
            customer?: {
                __typename?: 'User';
                id: number;
                email: string;
            } | null;
            restaurant?: {
                __typename?: 'Restaurant';
                id: number;
                name: string;
            } | null;
            items: Array<{
                __typename?: 'OrderItem';
                id: number;
                choices?: Array<{
                    __typename?: 'OrderItemOption';
                    name: string;
                }> | null;
                dish: {
                    __typename?: 'Dish';
                    id: number;
                    name: string;
                    price: number;
                };
            }>;
            driver?: { __typename?: 'User'; id: number; email: string } | null;
        } | null;
    };
};

export type EditOrderForOwnerMutationVariables = Exact<{
    editOrderForOwnerId: Scalars['Int']['input'];
    status: OrderStatusForOwner;
}>;

export type EditOrderForOwnerMutation = {
    __typename?: 'Mutation';
    editOrderForOwner: {
        __typename?: 'EditOrderForOwnerOutput';
        ok: boolean;
        error?: string | null;
    };
};

export type EditOrderForDeliveryMutationVariables = Exact<{
    editOrderForDeliveryId: Scalars['Int']['input'];
    status?: InputMaybe<OrderStatusForDelivery>;
}>;

export type EditOrderForDeliveryMutation = {
    __typename?: 'Mutation';
    editOrderForDelivery: {
        __typename?: 'EditOrderForDeliveryOutput';
        ok: boolean;
        error?: string | null;
    };
};

export type RestaurantFragmentFragment = {
    __typename?: 'Restaurant';
    id: number;
    name: string;
    address: string;
    coverImage?: string | null;
    category?: { __typename?: 'Category'; name: string; id: number } | null;
};

export type DishFragmentFragment = {
    __typename?: 'Dish';
    id: number;
    name: string;
    photo: string;
    price: number;
    description?: string | null;
    dishOptions?: Array<{
        __typename?: 'DishOption';
        extra: number;
        name: string;
    }> | null;
};

export type OrderFullFragmentFragment = {
    __typename?: 'Order';
    id: number;
    address: string;
    createdAt: any;
    status: OrderStatus;
    total: number;
    customer?: { __typename?: 'User'; id: number; email: string } | null;
    restaurant?: { __typename?: 'Restaurant'; id: number; name: string } | null;
    items: Array<{
        __typename?: 'OrderItem';
        id: number;
        choices?: Array<{
            __typename?: 'OrderItemOption';
            name: string;
        }> | null;
        dish: { __typename?: 'Dish'; id: number; name: string; price: number };
    }>;
    driver?: { __typename?: 'User'; id: number; email: string } | null;
};

export type OrderPartFragmentFragment = {
    __typename?: 'Order';
    id: number;
    address: string;
    createdAt: any;
    status: OrderStatus;
    total: number;
    restaurant?: { __typename?: 'Restaurant'; id: number; name: string } | null;
    items: Array<{
        __typename?: 'OrderItem';
        id: number;
        choices?: Array<{
            __typename?: 'OrderItemOption';
            name: string;
        }> | null;
        dish: { __typename?: 'Dish'; id: number; name: string };
    }>;
};

export type OrderUpdateFragmentFragment = {
    __typename?: 'Order';
    id: number;
    status: OrderStatus;
    driver?: { __typename?: 'User'; id: number; email: string } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
    __typename?: 'Query';
    me: {
        __typename?: 'User';
        id: number;
        email: string;
        role: UserRole;
        verified: boolean;
        address: string;
        dongCode?: string | null;
    };
};

export type RestaurantsQueryVariables = Exact<{
    categoryId: Scalars['Int']['input'];
    page: Scalars['Int']['input'];
}>;

export type RestaurantsQuery = {
    __typename?: 'Query';
    restaurants: {
        __typename?: 'RestaurantsOutput';
        ok: boolean;
        totalItems?: number | null;
        totalPages?: number | null;
        error?: string | null;
        result?: Array<{
            __typename?: 'Restaurant';
            id: number;
            name: string;
            coverImage?: string | null;
        }> | null;
    };
};

export type VerifyEmailWithCodeMutationVariables = Exact<{
    code: Scalars['String']['input'];
}>;

export type VerifyEmailWithCodeMutation = {
    __typename?: 'Mutation';
    verifyEmailwithCode: {
        __typename?: 'VerifyCodeOutput';
        error?: string | null;
        ok: boolean;
    };
};

export type CreateAccountMutationVariables = Exact<{
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
    role: UserRole;
    address: Scalars['String']['input'];
    dongCode?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateAccountMutation = {
    __typename?: 'Mutation';
    createAccount: {
        __typename?: 'CreateAccountOutput';
        error?: string | null;
        ok: boolean;
    };
};

export type EditProfileMutationVariables = Exact<{
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    address?: InputMaybe<Scalars['String']['input']>;
    dongCode?: InputMaybe<Scalars['String']['input']>;
}>;

export type EditProfileMutation = {
    __typename?: 'Mutation';
    editProfile: {
        __typename?: 'EditProfileOutput';
        error?: string | null;
        ok: boolean;
        user?: { __typename?: 'User'; email: string } | null;
    };
};

export type SeeCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type SeeCategoriesQuery = {
    __typename?: 'Query';
    seeCategories: {
        __typename?: 'SeeCategoriesOutput';
        ok: boolean;
        error?: string | null;
        categories?: Array<{
            __typename?: 'Category';
            id: number;
            name: string;
            restaurantCount: number;
        }> | null;
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

export type RestaurantQueryVariables = Exact<{
    restaurantId: Scalars['Int']['input'];
}>;

export type RestaurantQuery = {
    __typename?: 'Query';
    restaurant: {
        __typename?: 'RestaurantOutput';
        ok: boolean;
        error?: string | null;
        result?: {
            __typename?: 'Restaurant';
            id: number;
            name: string;
            address: string;
            coverImage?: string | null;
            menu: Array<{
                __typename?: 'Dish';
                id: number;
                name: string;
                photo: string;
                price: number;
                description?: string | null;
                dishOptions?: Array<{
                    __typename?: 'DishOption';
                    extra: number;
                    name: string;
                }> | null;
            }>;
            category?: {
                __typename?: 'Category';
                name: string;
                id: number;
            } | null;
        } | null;
    };
};

export type CreateOrderMutationVariables = Exact<{
    restaurantId: Scalars['Int']['input'];
    items: Array<CreateOrderItemInput> | CreateOrderItemInput;
    address: Scalars['String']['input'];
    dongCode?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateOrderMutation = {
    __typename?: 'Mutation';
    createOrder: {
        __typename?: 'CreateOrderOutput';
        error?: string | null;
        ok: boolean;
        orderId: number;
    };
};

export type SearchRestaurantQueryVariables = Exact<{
    query: Scalars['String']['input'];
    page: Scalars['Int']['input'];
}>;

export type SearchRestaurantQuery = {
    __typename?: 'Query';
    searchRestaurant: {
        __typename?: 'SearchRestaurantOutput';
        ok: boolean;
        error?: string | null;
        totalItems?: number | null;
        totalPages?: number | null;
        result?: Array<{
            __typename?: 'Restaurant';
            id: number;
            name: string;
            address: string;
            coverImage?: string | null;
            category?: {
                __typename?: 'Category';
                name: string;
                id: number;
            } | null;
        }> | null;
    };
};

export type AcceptedOrdersSubscriptionVariables = Exact<{
    [key: string]: never;
}>;

export type AcceptedOrdersSubscription = {
    __typename?: 'Subscription';
    acceptedOrders: {
        __typename?: 'Order';
        id: number;
        address: string;
        createdAt: any;
        status: OrderStatus;
        total: number;
        restaurant?: {
            __typename?: 'Restaurant';
            id: number;
            name: string;
        } | null;
        items: Array<{
            __typename?: 'OrderItem';
            id: number;
            choices?: Array<{
                __typename?: 'OrderItemOption';
                name: string;
            }> | null;
            dish: { __typename?: 'Dish'; id: number; name: string };
        }>;
    };
};

export type CookedOrdersSubscriptionVariables = Exact<{ [key: string]: never }>;

export type CookedOrdersSubscription = {
    __typename?: 'Subscription';
    cookedOrders: {
        __typename?: 'Order';
        id: number;
        status: OrderStatus;
        driver?: { __typename?: 'User'; id: number; email: string } | null;
    };
};

export type CreateDishMutationVariables = Exact<{
    name: Scalars['String']['input'];
    price: Scalars['Int']['input'];
    photo: Scalars['String']['input'];
    restaurantId: Scalars['Int']['input'];
    description?: InputMaybe<Scalars['String']['input']>;
    dishOptions?: InputMaybe<Array<DishOption> | DishOption>;
}>;

export type CreateDishMutation = {
    __typename?: 'Mutation';
    createDish: {
        __typename?: 'CreateDishOutput';
        ok: boolean;
        error?: string | null;
    };
};

export type CreateRestaurantMutationVariables = Exact<{
    name: Scalars['String']['input'];
    address: Scalars['String']['input'];
    categoryId: Scalars['Int']['input'];
    coverImage?: InputMaybe<Scalars['String']['input']>;
    dongCode?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateRestaurantMutation = {
    __typename?: 'Mutation';
    createRestaurant: {
        __typename?: 'CreateRestaurantOutput';
        ok: boolean;
        error?: string | null;
        restaurantId: number;
    };
};

export type MyRestaurantQueryVariables = Exact<{
    myRestaurantId: Scalars['Int']['input'];
}>;

export type MyRestaurantQuery = {
    __typename?: 'Query';
    myRestaurant: {
        __typename?: 'MyRestaurantOutput';
        ok: boolean;
        error?: string | null;
        result?: {
            __typename?: 'Restaurant';
            id: number;
            name: string;
            address: string;
            coverImage?: string | null;
            menu: Array<{
                __typename?: 'Dish';
                id: number;
                name: string;
                photo: string;
                price: number;
                description?: string | null;
                dishOptions?: Array<{
                    __typename?: 'DishOption';
                    extra: number;
                    name: string;
                }> | null;
            }>;
            category?: {
                __typename?: 'Category';
                name: string;
                id: number;
            } | null;
        } | null;
    };
};

export type MyRestaurantsQueryVariables = Exact<{ [key: string]: never }>;

export type MyRestaurantsQuery = {
    __typename?: 'Query';
    myRestaurants: {
        __typename?: 'MyRestaurantsOutput';
        ok: boolean;
        error?: string | null;
        result?: Array<{
            __typename?: 'Restaurant';
            id: number;
            name: string;
            address: string;
            coverImage?: string | null;
            category?: {
                __typename?: 'Category';
                name: string;
                id: number;
            } | null;
        }> | null;
    };
};

export type PendingOrdersSubscriptionVariables = Exact<{
    [key: string]: never;
}>;

export type PendingOrdersSubscription = {
    __typename?: 'Subscription';
    pendingOrders: {
        __typename?: 'Order';
        id: number;
        address: string;
        createdAt: any;
        status: OrderStatus;
        total: number;
        restaurant?: {
            __typename?: 'Restaurant';
            id: number;
            name: string;
        } | null;
        items: Array<{
            __typename?: 'OrderItem';
            id: number;
            choices?: Array<{
                __typename?: 'OrderItemOption';
                name: string;
            }> | null;
            dish: { __typename?: 'Dish'; id: number; name: string };
        }>;
    };
};

export type OrdersQueryVariables = Exact<{
    page: Scalars['Int']['input'];
    status?: InputMaybe<OrderStatus>;
}>;

export type OrdersQuery = {
    __typename?: 'Query';
    orders: {
        __typename?: 'OrdersOutput';
        ok: boolean;
        error?: string | null;
        totalPages?: number | null;
        totalItems?: number | null;
        result?: Array<{
            __typename?: 'Order';
            id: number;
            address: string;
            createdAt: any;
            status: OrderStatus;
            total: number;
            restaurant?: {
                __typename?: 'Restaurant';
                id: number;
                name: string;
            } | null;
            items: Array<{
                __typename?: 'OrderItem';
                id: number;
                choices?: Array<{
                    __typename?: 'OrderItemOption';
                    name: string;
                }> | null;
                dish: { __typename?: 'Dish'; id: number; name: string };
            }>;
        }> | null;
    };
};

export const RestaurantFragmentFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'RestaurantFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Restaurant' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coverImage' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<RestaurantFragmentFragment, unknown>;
export const DishFragmentFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'DishFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Dish' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'photo' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dishOptions' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'extra' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<DishFragmentFragment, unknown>;
export const OrderFullFragmentFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderFullFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                    },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'choices' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dish' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'price',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'driver' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OrderFullFragmentFragment, unknown>;
export const OrderPartFragmentFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderPartFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                    },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'choices' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dish' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OrderPartFragmentFragment, unknown>;
export const OrderUpdateFragmentFragmentDoc = {
    kind: 'Document',
    definitions: [
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderUpdateFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'driver' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OrderUpdateFragmentFragment, unknown>;
export const OrderUpdatesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'orderUpdates' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'orderId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orderUpdates' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'orderId' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {
                                        kind: 'Name',
                                        value: 'OrderUpdateFragment',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderUpdateFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'driver' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    OrderUpdatesSubscription,
    OrderUpdatesSubscriptionVariables
>;
export const OrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'order' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'orderId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'order' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'orderId' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'OrderFullFragment',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderFullFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                    },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'customer' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'choices' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dish' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'price',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'driver' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OrderQuery, OrderQueryVariables>;
export const EditOrderForOwnerDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'editOrderForOwner' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'editOrderForOwnerId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'status' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: {
                                kind: 'Name',
                                value: 'OrderStatusForOwner',
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'editOrderForOwner' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'editOrderForOwnerId',
                                    },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'status' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'status' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    EditOrderForOwnerMutation,
    EditOrderForOwnerMutationVariables
>;
export const EditOrderForDeliveryDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'editOrderForDelivery' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'editOrderForDeliveryId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'status' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'OrderStatusForDelivery' },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'editOrderForDelivery' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'editOrderForDeliveryId',
                                    },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'status' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'status' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    EditOrderForDeliveryMutation,
    EditOrderForDeliveryMutationVariables
>;
export const MeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'me' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'me' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'role' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'verified' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'address' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dongCode' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const RestaurantsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'restaurants' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'categoryId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'page' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurants' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'categoryId' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'categoryId' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'page' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'page' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'coverImage',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalItems' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalPages' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<RestaurantsQuery, RestaurantsQueryVariables>;
export const VerifyEmailWithCodeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'verifyEmailWithCode' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'code' },
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
                        name: { kind: 'Name', value: 'verifyEmailwithCode' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'code' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'code' },
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
    VerifyEmailWithCodeMutation,
    VerifyEmailWithCodeMutationVariables
>;
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
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'address' },
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
                        name: { kind: 'Name', value: 'dongCode' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
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
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'address' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'address' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dongCode' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'dongCode' },
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
export const EditProfileDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'editProfile' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'email' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'password' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'address' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'dongCode' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'editProfile' },
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
                                name: { kind: 'Name', value: 'address' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'address' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dongCode' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'dongCode' },
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
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'email',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<EditProfileMutation, EditProfileMutationVariables>;
export const SeeCategoriesDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'seeCategories' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'seeCategories' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'categories' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'restaurantCount',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<SeeCategoriesQuery, SeeCategoriesQueryVariables>;
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
export const RestaurantDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'restaurant' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'restaurantId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'restaurantId',
                                    },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'RestaurantFragment',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'menu',
                                                },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'DishFragment',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'RestaurantFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Restaurant' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coverImage' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'DishFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Dish' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'photo' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dishOptions' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'extra' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<RestaurantQuery, RestaurantQueryVariables>;
export const CreateOrderDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'createOrder' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'restaurantId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'items' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'ListType',
                            type: {
                                kind: 'NonNullType',
                                type: {
                                    kind: 'NamedType',
                                    name: {
                                        kind: 'Name',
                                        value: 'createOrderItemInput',
                                    },
                                },
                            },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'address' },
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
                        name: { kind: 'Name', value: 'dongCode' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createOrder' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'restaurantId' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'restaurantId',
                                    },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'items' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'items' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'address' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'address' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dongCode' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'dongCode' },
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
                                    name: { kind: 'Name', value: 'orderId' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const SearchRestaurantDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'searchRestaurant' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'query' },
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
                        name: { kind: 'Name', value: 'page' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'searchRestaurant' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'query' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'query' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'page' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'page' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalItems' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalPages' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'RestaurantFragment',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'RestaurantFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Restaurant' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coverImage' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    SearchRestaurantQuery,
    SearchRestaurantQueryVariables
>;
export const AcceptedOrdersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'acceptedOrders' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'acceptedOrders' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {
                                        kind: 'Name',
                                        value: 'OrderPartFragment',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderPartFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                    },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'choices' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dish' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    AcceptedOrdersSubscription,
    AcceptedOrdersSubscriptionVariables
>;
export const CookedOrdersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'cookedOrders' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cookedOrders' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {
                                        kind: 'Name',
                                        value: 'OrderUpdateFragment',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderUpdateFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'driver' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'email' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    CookedOrdersSubscription,
    CookedOrdersSubscriptionVariables
>;
export const CreateDishDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'createDish' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
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
                        name: { kind: 'Name', value: 'price' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'photo' },
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
                        name: { kind: 'Name', value: 'restaurantId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'description' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'dishOptions' },
                    },
                    type: {
                        kind: 'ListType',
                        type: {
                            kind: 'NonNullType',
                            type: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'dishOption' },
                            },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createDish' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'name' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'price' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'price' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'photo' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'photo' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'restaurantId' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'restaurantId',
                                    },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'description' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'description',
                                    },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dishOptions' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'dishOptions',
                                    },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<CreateDishMutation, CreateDishMutationVariables>;
export const CreateRestaurantDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'mutation',
            name: { kind: 'Name', value: 'CreateRestaurant' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
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
                        name: { kind: 'Name', value: 'address' },
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
                        name: { kind: 'Name', value: 'categoryId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'coverImage' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'dongCode' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'String' },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createRestaurant' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'name' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'address' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'address' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'categoryId' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'categoryId' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'coverImage' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'coverImage' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'dongCode' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'dongCode' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: {
                                        kind: 'Name',
                                        value: 'restaurantId',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    CreateRestaurantMutation,
    CreateRestaurantMutationVariables
>;
export const MyRestaurantDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'myRestaurant' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'myRestaurantId' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'myRestaurant' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: {
                                    kind: 'Variable',
                                    name: {
                                        kind: 'Name',
                                        value: 'myRestaurantId',
                                    },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'RestaurantFragment',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'menu',
                                                },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'FragmentSpread',
                                                            name: {
                                                                kind: 'Name',
                                                                value: 'DishFragment',
                                                            },
                                                        },
                                                    ],
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'RestaurantFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Restaurant' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coverImage' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'DishFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Dish' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'photo' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dishOptions' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'extra' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<MyRestaurantQuery, MyRestaurantQueryVariables>;
export const MyRestaurantsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'MyRestaurants' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'myRestaurants' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'RestaurantFragment',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'RestaurantFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Restaurant' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'coverImage' },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'category' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<MyRestaurantsQuery, MyRestaurantsQueryVariables>;
export const PendingOrdersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'subscription',
            name: { kind: 'Name', value: 'pendingOrders' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pendingOrders' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'FragmentSpread',
                                    name: {
                                        kind: 'Name',
                                        value: 'OrderPartFragment',
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderPartFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                    },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'choices' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dish' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<
    PendingOrdersSubscription,
    PendingOrdersSubscriptionVariables
>;
export const OrdersDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'orders' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'page' },
                    },
                    type: {
                        kind: 'NonNullType',
                        type: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: 'Int' },
                        },
                    },
                },
                {
                    kind: 'VariableDefinition',
                    variable: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'status' },
                    },
                    type: {
                        kind: 'NamedType',
                        name: { kind: 'Name', value: 'OrderStatus' },
                    },
                },
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'orders' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'page' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'page' },
                                },
                            },
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'status' },
                                value: {
                                    kind: 'Variable',
                                    name: { kind: 'Name', value: 'status' },
                                },
                            },
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'ok' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'error' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalPages' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'totalItems' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'result' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'FragmentSpread',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'OrderPartFragment',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            kind: 'FragmentDefinition',
            name: { kind: 'Name', value: 'OrderPartFragment' },
            typeCondition: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'Order' },
            },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'address' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                    },
                    { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                    { kind: 'Field', name: { kind: 'Name', value: 'total' } },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'restaurant' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                },
                            ],
                        },
                    },
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'choices' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dish' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'id',
                                                },
                                            },
                                            {
                                                kind: 'Field',
                                                name: {
                                                    kind: 'Name',
                                                    value: 'name',
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ],
} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;
