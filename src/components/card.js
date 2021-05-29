import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
import "./card.css"

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };
    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <div className="card" onClick={handleClick}>
                hello world
            </div>

            <div className="card" onClick={handleClick}>
                goodbye world
            </div>
        </ReactCardFlip>
    )
}

export default Card;