import { gql, useMutation, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormButton from '../../components/FormButton';
import errorLog from '../../errorLog';
import variables from '../../variables';
import FormError from '../../components/FormError';
import {
    CreateRestaurantMutation,
    CreateRestaurantMutationVariables,
    SeeCategoriesQuery,
    SeeCategoriesQueryVariables,
} from '../../gql/graphql';

const SEE_CATEGORIES_QUERY = gql`
    query seeCategories {
        seeCategories {
            categories {
                id
                name
                restaurantCount
            }
            ok
            error
        }
    }
`;

const CREATE_RESTAURANT = gql`
    mutation CreateRestaurant(
        $name: String!
        $address: String!
        $categoryId: Int!
        $coverImage: String
    ) {
        createRestaurant(
            name: $name
            address: $address
            categoryId: $categoryId
            coverImage: $coverImage
        ) {
            ok
            error
            restaurantId
        }
    }
`;

interface ICreateRestaurant {
    name: string;
    address: string;
    categoryId: number;
    coverImage: FileList;
    result?: string;
}

export default function CreateRestaurant() {
    const { data: categoriesData } = useQuery<
        SeeCategoriesQuery,
        SeeCategoriesQueryVariables
    >(SEE_CATEGORIES_QUERY);

    const [createRestaurant] = useMutation<
        CreateRestaurantMutation,
        CreateRestaurantMutationVariables
    >(CREATE_RESTAURANT);

    const {
        register,
        handleSubmit,
        getValues,
        clearErrors,
        setError,
        formState: { errors, isValid },
    } = useForm<ICreateRestaurant>({
        mode: 'onChange',
        defaultValues: {
            categoryId: 1,
        },
    });

    const [uploading, setUploading] = useState(false);

    const navigate = useNavigate();

    const onValid = async () => {
        if (uploading) return;

        setUploading(true);

        try {
            const { name, address, categoryId, coverImage } = getValues();
            const fileData = coverImage[0];
            const formBody = new FormData();
            formBody.append('file', fileData);

            const { file } = await fetch(variables.db.uploadUrl, {
                method: 'POST',
                body: formBody,
            }).then((result) => result.json());

            createRestaurant({
                variables: {
                    name,
                    address,
                    categoryId: +categoryId,
                    coverImage: file,
                },
                onCompleted: ({
                    createRestaurant: { ok, error, restaurantId },
                }) => {
                    setUploading(false);

                    if (!ok) {
                        switch (error) {
                            case 'Not Found':
                                setError('categoryId', {
                                    type: 'validate',
                                    message: '입력형식이 잘못되었습니다',
                                });
                                break;

                            default:
                                setError('result', {
                                    type: 'value',
                                    message: '식당 생성에 실패하였습니다',
                                });
                                break;
                        }
                    }

                    navigate(`/owner/restaurants/${restaurantId}`);
                },
                onError(error) {
                    errorLog('createRestaurant', error);
                    setUploading(false);
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const clearResultError = () => {
        clearErrors('result');
    };

    return (
        <div className='center-box'>
            <div className='max-w-3xl w-full rounded-lg pt-10 pb-4 mt-10'>
                <form
                    onSubmit={handleSubmit(onValid)}
                    className='grid gap-3 mt-5 px-5'
                >
                    <div>
                        <label htmlFor='name'>식당 이름</label>
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
                            minLength: {
                                value: 3,
                                message: '3글자 이상으로 작성해주세요',
                            },
                            onChange: clearResultError,
                        })}
                        className='auth-input'
                        placeholder='Name'
                        required
                        maxLength={30}
                    />

                    <div>
                        <label htmlFor='address'>주소</label>
                        {errors.address?.message && (
                            <FormError
                                message={errors.address.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='address'
                        {...register('address', {
                            required: '주소는 필수 항목입니다.',
                            onChange: clearResultError,
                        })}
                        className='auth-input'
                        placeholder='Address'
                        required
                        maxLength={200}
                    />

                    <div>
                        <label htmlFor='categoryId'>카테고리</label>
                        {errors.categoryId?.message && (
                            <FormError
                                message={errors.categoryId.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <select
                        id='categoryId'
                        {...register('categoryId')}
                        className='auth-input'
                    >
                        {categoriesData?.seeCategories.categories &&
                            categoriesData.seeCategories.categories.map(
                                (category, index) => (
                                    <option value={category.id} key={index}>
                                        {category.name}
                                    </option>
                                )
                            )}
                    </select>

                    <div>
                        <label htmlFor='coverImage'>대표 사진</label>
                        {errors.coverImage?.message && (
                            <FormError
                                message={errors.coverImage.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='coverImage'
                        {...register('coverImage', {
                            required: '사진 필수 항목입니다.',
                            onChange: clearResultError,
                        })}
                        type='file'
                        accept='image/jpeg, image/png'
                        className='auth-input'
                        placeholder='coverImage'
                        required
                    />

                    {errors.result?.message && (
                        <FormError message={errors.result.message} />
                    )}
                    <FormButton
                        isValid={isValid}
                        loading={uploading}
                        text='식당 생성하기'
                    />
                </form>
            </div>
        </div>
    );
}
