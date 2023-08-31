import { useMutation, gql } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LoginMutation, LoginMutationVariables } from '../gql/graphql';
import FormError from './../components/FormError';
import FormButton from '../components/FormButton';
import { userLogin } from '../apollo';
import errorLog from '../errorLog';

type ILoginForm = {
    email: string;
    password: string;
    result: string;
};

const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            error
            ok
            token
        }
    }
`;

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        getValues,
        clearErrors,
        setError,
        formState: { errors, isValid },
    } = useForm<ILoginForm>({ mode: 'onChange' });

    const [loginMutation, { loading }] = useMutation<
        LoginMutation,
        LoginMutationVariables
    >(LOGIN_MUTATION, {
        async onCompleted({ login: { ok, error, token } }) {
            if (error) {
                switch (error) {
                    case 'Not Found':
                        setError('result', {
                            type: 'result',
                            message: '사용자를 찾을 수 없습니다',
                        });
                        break;

                    case 'Password Wrong':
                        setError('result', {
                            type: 'result',
                            message: '잘못된 비밀번호 입니다',
                        });
                        break;
                }
            }

            if (ok && token) {
                userLogin(token);
                navigate('/');
                window.location.reload();
            }
        },
        onError(error) {
            errorLog('login', error);
        },
    });

    const onValid = () => {
        if (loading) return;
        const { email, password } = getValues();
        loginMutation({
            variables: { email, password },
        });
    };

    const clearResultError = () => {
        clearErrors('result');
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <Helmet>
                <title>Login | Delivery</title>
            </Helmet>
            <div className='bg-white max-w-lg w-full rounded-lg pt-10 pb-4 mt-10'>
                <h3 className='text-2xl text-center font-semibold'>로그인</h3>
                <form
                    onSubmit={handleSubmit(onValid)}
                    className='grid gap-3 mt-5 px-5'
                >
                    <input
                        {...register('email', {
                            required: '이메일은 필수 항목입니다.',
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
                    <input
                        {...register('password', {
                            required: true,
                            onChange: clearResultError,
                        })}
                        type='password'
                        className='auth-input'
                        placeholder='Password'
                        maxLength={30}
                    />

                    {errors.email?.message && (
                        <FormError message={errors.email.message} />
                    )}

                    {errors.password?.message && (
                        <FormError message={errors.password.message} />
                    )}

                    {errors.result?.message && (
                        <FormError message={errors.result.message} />
                    )}

                    <FormButton
                        text={'로그인'}
                        loading={loading}
                        isValid={isValid}
                    />
                </form>
                <div className='w-full mt-4'>
                    <Link to={'/create-account'}>
                        <h6 className='text-center text-sm text-gray-600'>
                            회원가입
                        </h6>
                    </Link>
                </div>
            </div>
        </div>
    );
}
