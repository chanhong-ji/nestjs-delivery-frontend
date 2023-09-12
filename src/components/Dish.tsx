import { useState } from 'react';
import { DishOption } from '../gql/graphql';
import DishOptionCompo from './DishOption';

type ButtonTitle = '추가' | '편집';

interface IProps {
    id: number;
    description?: string | null;
    name: string;
    price: number;
    options: Array<DishOption>;
    onClickButton: (dishId: number, choices?: string[]) => void;
    buttonTitle: ButtonTitle;
    image?: string;
}

export default function Dish({
    id,
    description,
    name,
    price,
    options,
    onClickButton,
    buttonTitle,
    image,
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

        onClickButton(id, selectedOptions);
        setOptionSelect((prev) => Array(prev.length).fill(false));
    };

    return (
        <div className='px-8 py-4 border cursor-pointer hover:border-gray-800 transition-all'>
            <div className='mb-5'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-lg font-medium '>{name}</h3>
                        <span>{price} 원</span>
                        <h4 className='font-medium text-gray-500'>
                            {description}
                        </h4>
                        {image && (
                            <div
                                className='w-20 h-20 bg-center bg-cover rounded-md mt-3'
                                style={{
                                    backgroundImage: `url(${image})`,
                                }}
                            ></div>
                        )}
                    </div>
                    <button
                        className='button px-2 py-1 h-min'
                        onClick={onClickAddBtn}
                    >
                        {buttonTitle}
                    </button>
                </div>
            </div>
            {options?.length !== 0 && (
                <div>
                    <h5 className='mt-8 mb-3 font-medium border-t-2 pt-3.5'>
                        Dish Options:
                    </h5>
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
