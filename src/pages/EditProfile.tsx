import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useMe } from '../hooks/useMe';
import FormButton from '../components/FormButton';
import FormError from '../components/FormError';
import errorLog from '../errorLog';
import {
    EditProfileMutation,
    EditProfileMutationVariables,
} from '../gql/graphql';

type IEditProfileForm = {
    email: string;
    password: string;
    passwordConfirm: string;
    result?: string;
};

const EDIT_PROFILE_MUTATION = gql`
    mutation editProfile($email: String, $password: String) {
        editProfile(email: $email, password: $password) {
            error
            ok
            user {
                email
            }
        }
    }
`;

export default function EditProfile() {
    const { data: userData, refetch: userRefetch } = useMe();
    const [editProfile, { loading }] = useMutation<
        EditProfileMutation,
        EditProfileMutationVariables
    >(EDIT_PROFILE_MUTATION);
    const {
        register,
        handleSubmit,
        getValues,
        clearErrors,
        setError,
        formState: { errors, isValid },
    } = useForm<IEditProfileForm>({
        mode: 'onChange',
        defaultValues: {
            email: userData?.me.email ?? '',
        },
    });

    const onValid = () => {
        const { email, password } = getValues();
        if ((!email || email === userData?.me.email) && !password) return;

        editProfile({
            variables: {
                ...(email && userData?.me.email !== email && { email }),
                ...(password && { password }),
            },
            onCompleted: async ({ editProfile: { ok, error, user } }) => {
                if (!ok) {
                    switch (error) {
                        case 'Email Already Taken':
                            setError('result', {
                                type: 'value',
                                message: '이미 존재하는 이메일 입니다',
                            });
                            break;

                        default:
                            break;
                    }
                    return;
                }

                await userRefetch();
            },
            onError: (error) => {
                errorLog('editProfile', error);
            },
        });
    };
    const clearResultError = () => {
        clearErrors('result');
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <Helmet>
                <title>Edit Profile | Delivery</title>
            </Helmet>
            <div className='bg-white max-w-lg w-full rounded-lg pt-10 pb-4 mt-10'>
                <h3 className='text-2xl text-center font-semibold'>
                    프로필 수정
                </h3>
                <form
                    onSubmit={handleSubmit(onValid)}
                    className='grid gap-3 mt-5 px-5'
                >
                    <div>
                        <label htmlFor='email'>이메일</label>
                        {errors.email?.message && (
                            <FormError
                                message={errors.email.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>

                    <input
                        id='email'
                        {...register('email', {
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: '유효한 이메일 주소를 입력하세요.',
                            },
                            onChange: clearResultError,
                        })}
                        type='email'
                        className='auth-input'
                        placeholder='Email'
                    />

                    <div>
                        <label htmlFor='password'>
                            비밀번호{' '}
                            <span className='text-xs text-gray-500'>
                                4글자 이상 16글자 이하로 작성해주세요
                            </span>
                        </label>
                        {errors.password?.message && (
                            <FormError
                                message={errors.password.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>
                    <input
                        id='password'
                        {...register('password', {
                            onChange: clearResultError,
                            minLength: {
                                value: 4,
                                message: '비밀번호는 4글자 이상이어야 합니다',
                            },
                            maxLength: {
                                value: 16,
                                message: '비밀번호는 16글자 이하이어야 합니다',
                            },
                        })}
                        type='password'
                        className='auth-input'
                        placeholder='Password'
                        minLength={4}
                        maxLength={16}
                    />

                    <div>
                        <label htmlFor='passwordConfirm'>비밀번호 확인</label>
                        {errors.passwordConfirm?.message && (
                            <FormError
                                message={errors.passwordConfirm.message}
                                className='text-xs ml-4'
                            />
                        )}
                    </div>

                    <input
                        id='passwordConfirm'
                        {...register('passwordConfirm', {
                            onChange: clearResultError,
                            validate: (value, formValue) => {
                                if (value === formValue.password) return true;
                                else return '비밀번호와 일치하지 않습니다';
                            },
                        })}
                        type='password'
                        className='auth-input'
                        placeholder='Password confirm'
                        maxLength={16}
                    />

                    {errors.result?.message && (
                        <FormError message={errors.result.message} />
                    )}

                    <FormButton
                        text={'확인'}
                        loading={loading}
                        isValid={isValid}
                    />
                </form>
            </div>
        </div>
    );
}
