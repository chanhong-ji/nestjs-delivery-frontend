interface IProps {
    loading: boolean;
    text: string;
    isValid: boolean;
}

export default function AuthButton({ loading, text, isValid }: IProps) {
    return (
        <button
            type='submit'
            className={
                isValid
                    ? 'auth-btn bg-green-800 hover:opacity-90'
                    : 'auth-btn bg-slate-500'
            }
            disabled={loading || !isValid}
        >
            {loading ? 'Loading...' : text}
        </button>
    );
}
