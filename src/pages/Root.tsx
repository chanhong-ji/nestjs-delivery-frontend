import { Outlet } from 'react-router-dom';
import { useMe } from '../hooks/useMe';
import Header from '../components/Header';
import VerifyAlert from '../components/VerifyAlert';

export default function Root() {
    const { data: userData } = useMe();

    return (
        <div className='h-screen w-screen flex flex-col'>
            {userData?.me && !userData.me.verified && <VerifyAlert />}
            <Header userId={userData?.me.id} />
            <Outlet />
        </div>
    );
}
