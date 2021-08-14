import React from 'react'

const Rating = ({ rate, HandlRate }) => {
    const stars = (n) => {
        let star = []
        for (let i = 1; i <= 5; i++) {
            if (i <= n) {
                star.push(<span key={i} style={{ color: "gold", fontSize: "20px" , cursor:"pointer"}} onClick={() => HandlRate(i)} >☆</span>)
            }
            else {
                star.push(<span key={i} style={{ color: "black" , fontSize: "20px" , cursor:"pointer"}} onClick={() => HandlRate(i)} >☆</span>)

            }
        }
        return (star)
    }
    return (

        <div>
            {stars(rate)}
        </div>
    )
}
export default Rating