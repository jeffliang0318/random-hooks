import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './star-review.css'
function StarIcon () {
    return (
        <span>
            <FaStar/>
        </span>
    )
}
function RegStar () {
    return (
        <span>
            <FaRegStar/>
        </span>
    )
}

function Stars ({ starNumbers = 5, type = '' }) {
    const array = [...new Array(starNumbers)]
    return (
        <>
            {array.map((_, i) => {
                return type === 'FaStar' ? <StarIcon key={i} /> : <RegStar key={i}/>
            })}  
        </>
    )
}

export default function StarsReview () {
    return(
        <div className='d-flex justify-content-center align-items-center'>
            <div className='rating-solid'>
                <Stars type="FaStar"/>
            </div>
            <pre>
                <code>
                    {
                        `
                        .rating,
                        .rating-solid {
                          direction: rtl;
                          text-align: center;
                        }

                        .rating-solid > span:hover,
                        .rating-solid > span:hover ~ span {
                          color: gold;
                        }`
                    }
                </code>
            </pre>
            <div className='rating'>
                <Stars/>
            </div>
            <pre>
                <code>
                    {
                        `
                        .rating,
                        .rating-solid {
                          direction: rtl;
                          text-align: center;
                        }
                        .rating > span {
                          display: inline-block;
                          position: relative;
                        }
                        .rating > span:hover,
                        .rating > span:hover ~ span {
                          color: transparent;
                        }
                        
                        .rating > span:hover:before,
                        .rating > span:hover ~ span:before {
                          content: "\\2605";
                          position: absolute;
                          left: 0;
                          color: gold;
                        }`
                    }
                </code>
            </pre>
        </div>

    )
}


