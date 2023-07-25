interface IProps {
    message: string;
    className?: string;
}

export default function FormError({ message, className }: IProps) {
    return (
        <span className={`text-center text-red-600 font-bold ${className}`}>
            {message}
        </span>
    );
}
