import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { TOKEN } from '../constants';
import { isLoggedInVar } from '../apollo';

interface IProps {
    userId: number | undefined;
}

interface ISearchForm {
    keyword: string;
}

export default function Header({ userId }: IProps) {
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
                    <Link to='/'>Delivery Service</Link>
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
                            <Link to='/edit-profile'>
                                <h5 className='header-btn mr-5'>My page</h5>
                            </Link>
                            <span
                                onClick={() => {
                                    localStorage.removeItem(TOKEN);
                                    isLoggedInVar(false);
                                    navigate(0);
                                }}
                                className='header-btn hover:cursor-pointer'
                            >
                                Logout
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
