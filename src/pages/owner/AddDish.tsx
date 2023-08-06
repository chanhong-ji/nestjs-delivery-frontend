import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import {
    CreateDishMutation,
    CreateDishMutationVariables,
} from '../../gql/graphql';
import { useForm, useFieldArray } from 'react-hook-form';
import FormError from '../../components/FormError';
import FormButton from '../../components/FormButton';
import { MY_RESTAURANT_QUERY } from './MyRestaurant';

const CREATE_DISH_MUTATION = gql`
    mutation createDish(
        $name: String!
        $price: Int!
        $photo: String!
        $restaurantId: Int!
        $description: String
        $dishOptions: [dishOption!]
    ) {
        createDish(
            name: $name
            price: $price
            photo: $photo
            restaurantId: $restaurantId
            description: $description
            dishOptions: $dishOptions
        ) {
            ok
            error
        }
    }
`;

type dishOption = {
    name: string;
    extra: number;
};

interface IForm {
    name: string;
    price: number;
    photo: FileList;
    description?: string;
    dishOptions: dishOption[];
    result?: string;
}

export default function AddDish() {
    const navigate = useNavigate();
    const { id: restaurantId, dishId } = useParams() as {
        id: string;
        dishId: string;
    };
    const [uploading, setUploading] = useState(false);
    const [createDish, { loading }] = useMutation<
        CreateDishMutation,
        CreateDishMutationVariables
    >(CREATE_DISH_MUTATION);
    const {
        register,
        handleSubmit,
        getValues,
        clearErrors,
        formState: { errors, isValid },
        control,
    } = useForm<IForm>({
        mode: 'onChange',
    });
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dishOptions',
    });

    const clearResultError = () => {
        clearErrors('result');
    };

    const onValid = () => {
        if (uploading) return;

        setUploading(true);

        const { name, price, photo, description, dishOptions } = getValues();

        createDish({
            variables: {
                name,
                price: +price,
                restaurantId: +restaurantId,
                description,
                photo: '',
                dishOptions: dishOptions.map(({ extra, name }) => ({
                    name,
                    extra: +extra,
                })),
            },
            refetchQueries: [
                {
                    query: MY_RESTAURANT_QUERY,
                    variables: { myRestaurantId: +restaurantId },
                },
            ],
            onCompleted(data) {
                setUploading(false);
                navigate(`/owner/restaurants/${restaurantId}`);
            },
        });
    };

    return (
        <div className='center-box'>
            <div className='max-w-3xl w-full rounded-lg pt-10 pb-4 mt-10'>
                <form
                    onSubmit={handleSubmit(onValid)}
                    className='grid gap-3 mt-5 px-5'
                >
                    <div>
                        <label htmlFor='name'>메뉴 이름</label>
                        {errors.name?.message && (
                            <FormError
                                message={errors.name.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='name'
                        {...register('name', {
                            required: '이름은 필수 항목입니다.',
                            onChange: clearResultError,
                        })}
                        className='auth-input'
                        placeholder='Name'
                        required
                        maxLength={30}
                    />

                    <div>
                        <label htmlFor='price'>가격</label>
                        {errors.price?.message && (
                            <FormError
                                message={errors.price.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='price'
                        {...register('price', {
                            required: '가격은 필수항목입니다',
                            onChange: clearResultError,
                            min: {
                                value: 1,
                                message: '가격을 설정해주세요',
                            },
                            max: {
                                value: 1000000,
                                message: '불가능한 값입니다',
                            },
                        })}
                        type='number'
                        className='auth-input'
                        placeholder='Price'
                        required
                        defaultValue={0}
                        max={1000000}
                    />

                    <div>
                        <label htmlFor='photo'>사진</label>
                        {errors.photo?.message && (
                            <FormError
                                message={errors.photo.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='photo'
                        {...register('photo', {
                            required: '사진은 필수 항목입니다.',
                            onChange: clearResultError,
                        })}
                        className='auth-input'
                        required
                        type='file'
                    />

                    <div>
                        <label htmlFor='description'>설명</label>
                        {errors.description?.message && (
                            <FormError
                                message={errors.description.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='description'
                        {...register('description', {
                            onChange: clearResultError,
                            maxLength: {
                                value: 50,
                                message: '50자 이하로 작성해주세요',
                            },
                        })}
                        className='auth-input'
                        placeholder='Description'
                        maxLength={100}
                    />

                    {/* DISH OPTION */}
                    <div className='my-10'>
                        <h4 className='font-medium  mb-3 text-lg'>
                            추가 선택 옵션
                        </h4>
                        <button
                            onClick={() => append({ name: '', extra: 0 })}
                            className='text-white bg-gray-900 py-1 px-2 mt-5'
                        >
                            옵션 추가
                        </button>
                        {fields.map((field, idx) => (
                            <div key={idx} className='mt-5'>
                                <input
                                    {...register(`dishOptions.${idx}.name`, {
                                        required: '필수입니다',
                                    })}
                                    className='py-2 px-4 focus:outline-none mr-3 focus:border-gray-600 border-2'
                                    type='text'
                                    placeholder='Option Name'
                                    required
                                />
                                <input
                                    {...register(`dishOptions.${idx}.extra`)}
                                    className='py-2 px-4 focus:outline-none focus:border-gray-600 border-2'
                                    type='number'
                                    min={0}
                                    placeholder='Option Extra'
                                />
                                <button onClick={() => remove(idx)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <FormButton
                        isValid={isValid}
                        loading={uploading}
                        text='메뉴 생성하기'
                    />
                </form>
            </div>
        </div>
    );
}
