import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { userLogout } from '../apollo';
import { UserRole } from '../gql/graphql';

interface IProps {
    userId: number | undefined;
    role?: UserRole;
}

interface ISearchForm {
    keyword: string;
}

export default function Header({ userId, role }: IProps) {
    const navigate = useNavigate();

    const { register, handleSubmit, getValues } = useForm<ISearchForm>();

    const onValid = () => {
        const { keyword } = getValues();
        navigate(`/search?keyword=${keyword}`);
    };

    return (
        <header className='w-full py-1 xl:py-4 px-2 xl:px-6 shadow-md'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-3xl font-semibold'>
                    <Link to='/categories/1'>배달의 인류</Link>
                </h2>

                {/* 검색 창 */}
                <form
                    onSubmit={handleSubmit(onValid)}
                    className=' w-1/3 px-7 py-3 rounded-full shadow-inner bg-blue-100 invisible lg:visible flex justify-between'
                >
                    <input
                        {...register('keyword', { required: true })}
                        maxLength={30}
                        placeholder='검색어를 입력해주세요'
                        className='bg-inherit text-lg outline-none w-full'
                    ></input>
                    <button>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className='text-slate-600 text-xl'
                        />
                    </button>
                </form>

                {/* 오른쪽 패널 */}
                <div className='flex items-center'>
                    {userId ? (
                        <>
                            {role === UserRole.Client && (
                                <>
                                    <Link to='/orders'>
                                        <h5 className='header-btn mr-5'>
                                            주문내역
                                        </h5>
                                    </Link>
                                </>
                            )}
                            {role === UserRole.Owner && (
                                <>
                                    <Link to='/owner/orders'>
                                        <h5 className='header-btn mr-5'>
                                            진행중 주문
                                        </h5>
                                    </Link>
                                    <Link to='/owner'>
                                        <h5 className='header-btn mr-5'>
                                            나의 식당
                                        </h5>
                                    </Link>
                                </>
                            )}
                            {role === UserRole.Delivery && (
                                <>
                                    <Link to='/delivery/orders'>
                                        <h5 className='header-btn mr-5'>
                                            주문
                                        </h5>
                                    </Link>
                                </>
                            )}
                            <Link to='/my-page'>
                                <h5 className='header-btn mr-5'>마이페이지</h5>
                            </Link>
                            <span
                                onClick={() => {
                                    userLogout();
                                    navigate(0);
                                }}
                                className='header-btn hover:cursor-pointer'
                            >
                                로그아웃
                            </span>
                        </>
                    ) : (
                        <>
                            <Link to='login'>
                                <h6 className='header-btn mr-5'>로그인</h6>
                            </Link>
                            <Link to='create-account'>
                                <h6 className='header-btn'>회원가입</h6>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
