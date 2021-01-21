import React from 'react';
import { FaStar } from 'react-icons/fa';
import './star-review.css'
function StarIcon () {
    return (
        <span>
            <FaStar/>
        </span>
    )
}

export default function StarsReview ({ starNumbers = 5 }) {
    const array = [...new Array(5)]
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <div className='rating'>
                {
                    array.map((_, i) => {
                        return <StarIcon key={i} />
                    })

                }
            </div>
            <pre>
                <code>
                    {
                        `
                        .rating {
                            direction: rtl;
                            text-align: center;
                        }

                        .rating > span:hover,
                        .rating > span:hover ~ span {
                            color: gold;
                        }`
                    }
                </code>
            </pre>
        </div>

    )
}


