import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    const onClickHomeBtn = () => {
        return navigate('/', { replace: true });
    };

    return (
        <div className=' h-screen'>
            <div className='h-1/2 center-box justify-end'>
                <h1 className='text-4xl'>Page Not Found</h1>
                <button
                    className='text-xl mt-4 bg-blue-600 p-2 rounded-md text-white'
                    onClick={onClickHomeBtn}
                >
                    Go to home &rarr;
                </button>
            </div>
        </div>
    );
}
