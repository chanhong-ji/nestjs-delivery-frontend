import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    page: number;
    totalPages: number;
    onPrevPageClick: () => void;
    onNextPageClick: () => void;
}

export default function Pagination({
    page,
    onPrevPageClick,
    onNextPageClick,
    totalPages,
}: IProps) {
    return (
        <div className='max-w-xs grid grid-cols-3 place-items-center'>
            {page > 1 && (
                <button>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        onClick={onPrevPageClick}
                    />
                </button>
            )}
            <div className='col-start-2'>{`Page ${page} of ${totalPages}`}</div>
            {page < totalPages && (
                <button>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        onClick={onNextPageClick}
                    />
                </button>
            )}
        </div>
    );
}
