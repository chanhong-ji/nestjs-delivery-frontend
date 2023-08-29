import { useDaumPostcodePopup } from 'react-daum-postcode';

interface IPostcodeProps {
    onComplete: (address: string) => void;
}

export const Postcode = (props: IPostcodeProps) => {
    const open = useDaumPostcodePopup();

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress +=
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        props.onComplete(fullAddress);
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className='bg-slate-300 p-1 text-sm ml-2 rounded-sm'
        >
            주소 찾기
        </button>
    );
};
