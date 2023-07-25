import { Link, useNavigate } from 'react-router-dom';
import { TOKEN } from '../constants';
import { isLoggedInVar } from '../apollo';

interface IProps {
    userId: number | undefined;
}

export default function Header({ userId }: IProps) {
    const navigate = useNavigate();

    return (
        <header className='w-full py-1 xl:py-4 px-2 xl:px-6 shadow-md'>
            <div className='w-full flex justify-between items-center'>
                <h2 className='text-3xl font-semibold'>
                    <Link to='/'>Delivery Service</Link>
                </h2>
                <div className=' w-1/3 px-7 py-3 rounded-full shadow-inner bg-green-100 invisible lg:visible'>
                    <input
                        className='bg-inherit text-lg outline-none w-full'
                        maxLength={30}
                        placeholder='검색어를 입력해주세요'
                    ></input>
                </div>
                <div className='flex items-center'>
                    {userId ? (
                        <>
                            <Link to='/profile'>
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
