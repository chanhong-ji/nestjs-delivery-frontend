interface IDishOptionProps {
    name: string;
    extra?: number | null;
    isSelected?: boolean;
    onClick: () => void;
}

export default function DishOptionCompo({
    isSelected = false,
    name,
    extra,
    onClick,
}: IDishOptionProps) {
    return (
        <span
            onClick={onClick}
            className={`border px-2 py-1 ${
                isSelected ? 'border-gray-800' : 'hover:border-gray-800'
            }`}
        >
            <span className='mr-2'>{name}</span>
            {<span className='text-sm opacity-75'>({extra}원)</span>}
        </span>
    );
}
