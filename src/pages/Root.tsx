import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <div className='bg-slate-900 h-screen w-screen'>
            <Outlet />
        </div>
    );
}
