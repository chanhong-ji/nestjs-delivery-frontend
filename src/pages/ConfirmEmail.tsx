import { gql, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    VerifyEmailWithCodeMutation,
    VerifyEmailWithCodeMutationVariables,
} from '../gql/graphql';
import { useMe } from '../hooks/useMe';

const VERIFY_EMAIL_MUTATION = gql`
    mutation verifyEmailWithCode($code: String!) {
        verifyEmailwithCode(code: $code) {
            error
            ok
        }
    }
`;

export default function ConfirmCode() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { refetch: userRefetch } = useMe();

    const redirectHome = () => {
        navigate('/', { replace: true });
    };

    const [verifyEmailMutation, { data: verifyResult }] = useMutation<
        VerifyEmailWithCodeMutation,
        VerifyEmailWithCodeMutationVariables
    >(VERIFY_EMAIL_MUTATION);

    useEffect(() => {
        const code = searchParams.get('code');

        if (!code) {
            redirectHome();
            return;
        }

        userRefetch().then(({ data: { me } }) => {
            verifyEmailMutation({
                variables: { code },

                onCompleted: ({ verifyEmailwithCode: { ok, error } }) => {
                    if (!ok) redirectHome();
                    // 성공 실패 팝업
                },

                onError: () => {
                    redirectHome();
                },

                update: (cache, result) => {
                    if (result.data?.verifyEmailwithCode.ok && me) {
                        cache.modify({
                            id: cache.identify(me),
                            fields: {
                                verified: () => true,
                            },
                        });
                    }
                },
            });
        });
    }, []);

    return (
        <div className='bg-gray-50 w-full grow flex justify-center items-center flex-col pb-20'>
            {verifyResult?.verifyEmailwithCode.ok === true ? (
                <>
                    <h1 className='text-4xl font-semibold mb-3'>
                        Your email is verified
                    </h1>
                    <h6
                        className='text-xl underline hover:cursor-pointer text-blue-700'
                        onClick={redirectHome}
                    >
                        Go to Home
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            className='text-sm ml-2'
                        />
                    </h6>
                </>
            ) : (
                <>
                    <h1 className='text-4xl font-bold mb-3'>
                        Confirming email...
                    </h1>
                    <svg
                        className='animate-spin h-5 w-5 mb-1 bg-blue-600'
                        viewBox='0 0 24 24'
                    />
                    <h3 className='text-2xl'>
                        Please wait, don't close this page...
                    </h3>
                </>
            )}
        </div>
    );
}
