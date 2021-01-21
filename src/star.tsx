import './star-review.css'
import StarReview, { Stars } from './star-review'

function wierFrameStars () {
    return (
        <>
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
        </>
    )
}

function solidStars () {
    return (
        <>
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
        </>
    )
}

export default function StarsReview () {
    return(
        <div className="container-md">
            <h2>Hover only</h2>
            <div className='d-flex justify-content-between align-items-center'>
                { solidStars() }
                { wierFrameStars() }
            </div>
            <h2>Click to set star review</h2>
            <StarReview />
        </div>

    )
}


