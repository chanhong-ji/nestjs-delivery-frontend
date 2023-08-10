import { useNavigate } from 'react-router-dom';

export default function MyPage() {
    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col items-center h-full bg-slate-50'>
            <h3 className='text-2xl text-center font-semibold mt-10'>
                마이페이지
            </h3>
            <button
                className='menu-btn'
                onClick={() => {
                    navigate('edit-profile');
                }}
            >
                정보 수정하기
            </button>
        </div>
    );
}
