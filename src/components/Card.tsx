import React, { FC } from 'react'
import { CardInfo } from '../types'

import '../css/Card.css'

const Card: FC<CardInfo> = ({ name, desc, imageSrc, type }) => {
    return (
        <div className="Card">
            <img className="CardImage" src={imageSrc} alt={`${name} Card`} />
        </div>
    )
}

export default Card
