import { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface IStars {
    starNumbers?: number,
    type?: string,
    activeIndex?: number,
    setActiveIndex?: Function
}

export function Stars ({ starNumbers = 5, type = '', activeIndex = 5, setActiveIndex } : IStars) {
    const array = [...new Array(starNumbers)]
    return (
        <>
            {array.map((_, i) => {
                const activeCss = activeIndex <= i ? "star-active" : "";
                return (
                    <span className={activeCss} key={i} onClick={() =>{
                        if (setActiveIndex) {
                            setActiveIndex(i)
                        }
                    }}>
                        {
                            type === 'FaStar' 
                            ? <FaStar/> 
                            : <FaRegStar/>
                        }
                    </span>
                )
            })}  
        </>
    )
}

export default function StarReview () {
    const STAR_NUMBERS = 5;
    const [activeIndex, setActiveIndex] = useState(5);
    
    return (
        <div className="d-flex align-items-center">
            <div className='rating my-2'>
                <Stars 
                    starNumbers={STAR_NUMBERS}
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex}
                />
            </div>
            <span className='m-2'>{`${STAR_NUMBERS - activeIndex} out of ${STAR_NUMBERS}`}</span>
            <button 
                type="button" 
                className="btn btn-secondary btn-sm m-2" 
                onClick={() => setActiveIndex(5)}
                >
                Reset to 0 star
            </button>
        </div>
    )
}