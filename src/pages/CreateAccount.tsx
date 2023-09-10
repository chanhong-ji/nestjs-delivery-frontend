import { gql, useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { CreateAccountMutation, UserRole } from '../gql/graphql';
import FormButton from '../components/FormButton';
import FormError from '../components/FormError';
import errorLog from '../errorLog';
import { Postcode } from '../components/Postcode';

interface ICreateAccountForm {
    email: string;
    password: string;
    role: UserRole;
    result: string;
    address: string;
    addressDetail?: string;
    dongCode: string;
}

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount(
        $email: String!
        $password: String!
        $role: UserRole!
        $address: String!
        $dongCode: String
    ) {
        createAccount(
            email: $email
            password: $password
            role: $role
            address: $address
            dongCode: $dongCode
        ) {
            error
            ok
        }
    }
`;

export default function CreateAccount() {
    const {
        register,
        handleSubmit,
        getValues,
        clearErrors,
        setError,
        setValue,
        formState: { errors, isValid },
    } = useForm<ICreateAccountForm>({
        mode: 'onChange',
        defaultValues: { role: UserRole.Client },
    });

    const navigate = useNavigate();

    const [createAccountMutation, { loading }] =
        useMutation<CreateAccountMutation>(CREATE_ACCOUNT_MUTATION, {
            onCompleted({ createAccount: { ok, error } }) {
                if (error) {
                    switch (error) {
                        case 'Email Already Taken':
                            setError('result', {
                                type: 'value',
                                message: '이미 존재하는 이메일입니다',
                            });
                            break;
                    }
                }

                if (ok) {
                    navigate('/login');
                }
            },
            onError(error) {
                errorLog('createAccount', error);
            },
        });

    const onValid = () => {
        if (loading) return;
        const { email, password, role, address, addressDetail, dongCode } =
            getValues();

        createAccountMutation({
            variables: {
                email,
                password,
                role,
                address: [address, addressDetail].join(' '),
                dongCode,
            },
        });
    };

    const clearResultError = () => {
        clearErrors('result');
    };

    return (
        <div className='w-full flex flex-col items-center'>
            <Helmet>
                <title>Create Account | Delivery</title>
            </Helmet>
            <div className='max-w-lg w-full rounded-lg pt-10 pb-4 mt-10'>
                <h3 className='text-2xl text-center font-semibold'>회원가입</h3>
                <form
                    onSubmit={handleSubmit(onValid)}
                    className='grid gap-3 mt-5 px-5'
                >
                    <label htmlFor='email'>이메일</label>
                    <input
                        id='email'
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
                        required
                    />
                    <label htmlFor='password'>
                        비밀번호{' '}
                        <span className='text-xs text-gray-500'>
                            4글자 이상 16글자 이하로 작성해주세요
                        </span>
                    </label>

                    <input
                        id='password'
                        {...register('password', {
                            required: true,
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
                        required
                    />

                    <div>
                        <label htmlFor='address'>주소 </label>
                        <Postcode
                            onComplete={(address, dongCode) => {
                                setValue('address', address);
                                setValue('dongCode', dongCode);
                            }}
                        />
                    </div>

                    <input
                        id='address'
                        {...register('address', {
                            required: true,
                            onChange: clearResultError,
                        })}
                        className='auth-input'
                        placeholder='Address'
                        disabled={true}
                        required
                    />
                    <input
                        {...register('addressDetail')}
                        className='auth-input'
                        placeholder='AddressDetail'
                    />

                    <label htmlFor='role'>역할</label>
                    <select
                        id='role'
                        {...register('role')}
                        className='auth-input'
                    >
                        {Object.keys(UserRole).map((role, index) => (
                            <option value={role} key={index}>
                                {role}
                            </option>
                        ))}
                    </select>

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
                        text={'가입하기'}
                        loading={loading}
                        isValid={isValid}
                    />
                </form>
                <div className='w-full mt-4'>
                    <Link to={'/login'}>
                        <h6 className='text-center text-sm text-gray-600'>
                            로그인하기
                        </h6>
                    </Link>
                </div>
            </div>
        </div>
    );
}
