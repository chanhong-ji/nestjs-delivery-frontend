import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useMe } from '../../hooks/useMe';
import { UserRole } from '../../gql/graphql';

export default function Delivery() {
    const { data: meData } = useMe();
    const navigate = useNavigate();

    useEffect(() => {
        if (meData?.me.role && meData.me.role !== UserRole.Delivery) {
            return navigate('/', { replace: true });
        }
    }, [meData]);

    return (
        <div>
            <Outlet />
        </div>
    );
}
