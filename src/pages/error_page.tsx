import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log('Error page error: ', error);

    return (
        <div>
            <span>Error page</span>
        </div>
    );
}
