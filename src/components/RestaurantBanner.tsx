interface IProps {
    coverImage: string;
    name: string;
    address: string;
}

export default function RestaurantBanner({
    coverImage,
    name,
    address,
}: IProps) {
    return (
        <div
            className=' bg-gray-800 bg-center bg-cover py-48 max-h-52'
            style={{
                backgroundImage: `url(${coverImage})`,
            }}
        >
            <div className='bg-white py-8 pl-48 pr-7 w-fit max-w-lg'>
                <h4 className='text-4xl mb-3 w-fit'>{name}</h4>
                <h6 className='text-sm font-light w-fit'>{address}</h6>
            </div>
        </div>
    );
}
