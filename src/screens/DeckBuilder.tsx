import React from 'react';
import Card from '../components/Card';

import '../css/DeckBuilder.css';
import { CardInfo } from '../types';

const CardInfoTest: CardInfo = {
    name: 'Sparkling Bubbles',
    shikigamiName: 'Akaname',
    desc: 'Description',
    type: 'Field',
    imageSrc: './images/akaname/2.jpg'
};

const DeckBuilder = () => {
    return (
        <div className='DeckBuilderContainer'>
            <div className='DeckBuilderLeft'>
                <p>Left</p>
            </div>
            <div className='DeckBuilderRight'>
                <p>Right</p>
                <Card {...CardInfoTest} />
            </div>
        </div>
    );
};

export default DeckBuilder;
