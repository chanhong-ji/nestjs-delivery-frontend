import { useState } from 'react';
import { DishOption } from '../gql/graphql';
import DishOptionCompo from './DishOption';

interface IProps {
    id: number;
    description?: string | null;
    name: string;
    price: number;
    options: Array<DishOption>;
    addItemToCart: (dishId: number, choices?: string[]) => void;
}

export default function Dish({
    id,
    description,
    name,
    price,
    options,
    addItemToCart,
}: IProps) {
    const [optionSelect, setOptionSelect] = useState(
        Array(options.length).fill(false)
    );

    const onClickOption = (index: number) => {
        setOptionSelect((curr) =>
            [...curr].map((value, idx) => (idx === index ? !value : value))
        );
    };

    const onClickAddBtn = () => {
        const selectedOptions = options
            .filter((_, idx) => optionSelect[idx])
            .map((option) => option.name);

        addItemToCart(id, selectedOptions);
        setOptionSelect((prev) => Array(prev.length).fill(false));
    };

    return (
        <div className='px-8 py-4 border cursor-pointer hover:border-gray-800 transition-all'>
            <div className='mb-5'>
                <div className='flex justify-between'>
                    <h3 className='text-lg font-medium '>{name}</h3>
                    <button
                        className='button px-2 py-1'
                        onClick={onClickAddBtn}
                    >
                        추가
                    </button>
                </div>
                <h4 className='font-medium'>{description}</h4>
            </div>
            <span>{price} 원</span>
            {options?.length !== 0 && (
                <div>
                    <h5 className='mt-8 mb-3 font-medium'>Dish Options:</h5>
                    <div className='grid gap-2 justify-start'>
                        {options?.map((option, index) => (
                            <DishOptionCompo
                                key={index}
                                name={option.name}
                                extra={option.extra}
                                isSelected={optionSelect.at(index)}
                                onClick={() => onClickOption(index)}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
