import { useNavigate } from 'react-router-dom';
import { useMe } from '../hooks/useMe';

export default function MyPage() {
    const navigate = useNavigate();
    const { data: meData } = useMe();

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
            {meData?.me.role === 'Owner' && (
                <button
                    className='menu-btn'
                    onClick={() => navigate('create-restaurant')}
                >
                    식당 생성하기
                </button>
            )}
        </div>
    );
}
