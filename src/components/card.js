import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';

const Card = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    };
    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <div onClick={handleClick}>
                hello world
            </div>

            <div onClick={handleClick}>
                goodbye world
            </div>
        </ReactCardFlip>
    )
}

export default Card;