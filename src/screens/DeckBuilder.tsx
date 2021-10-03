import React from 'react';
import Card from '../components/Card';

import '../css/DeckBuilder.css';
import { CardInfo } from '../types';

const mockCards: CardInfo[] = [
    {
        name: 'Odokuro',
        shikigamiName: 'Odokuro',
        desc: 'Move when Odokuro revives.',
        type: 'Shikigami',
        imageSrc: './images/good-or-evil/odokuro/0.jpg'
    },
    {
        name: 'Toxic Mist',
        shikigamiName: 'Odokuro',
        desc: 'Enhance: If Odokuro is in the Combat Zone, deal 1 damage to all opponent units after it attacks.',
        type: 'Combat',
        imageSrc: './images/good-or-evil/odokuro/1.jpg'
    },
    {
        name: 'Interrogate',
        shikigamiName: 'Odokuro',
        desc: 'Can be played when defeated. Deal 3 damage. Your defeat countdown -1.',
        type: 'Spell',
        imageSrc: './images/good-or-evil/odokuro/2.jpg'
    },
    {
        name: 'Bones of Sanzu',
        shikigamiName: 'Odokuro',
        desc: 'The unit is defeated at the end of the opponent\'s turn.',
        type: 'Form',
        imageSrc: './images/good-or-evil/odokuro/5.jpg'
    },
    {
        name: 'Call from the Other Side',
        shikigamiName: 'Odokuro',
        desc: 'Revive Odokuro when it is defeated. Enhance: This card gains Fast when Odokuro is in the Combat Zone.',
        type: 'Form',
        imageSrc: './images/good-or-evil/odokuro/3.jpg'
    },
    {
        name: 'Undying Loyalty',
        shikigamiName: 'Odokuro',
        desc: 'Can only be played when defeated. Revive Odokuro and gain 4[]. Trigger: This card is played automatically when you are attacked.',
        type: 'Spell',
        imageSrc: './images/good-or-evil/odokuro/8.jpg'
    },
    {
        name: 'Banquet of the Dead',
        shikigamiName: 'Odokuro',
        desc: 'Can be played when defeated. Deal 2 damage to all opponent Shikigami. Your countdowns -1 for every Shikigami defeated.',
        type: 'Spell',
        imageSrc: './images/good-or-evil/odokuro/4.jpg'
    },
    {
        name: 'Flower Sea Thrust',
        shikigamiName: 'Odokuro',
        desc: 'Successively attack the Shikigami in the opponent\'s Combat Zone, 1 random Shikigami in the Standby Zone, and the opponent player.',
        type: 'Combat',
        imageSrc: './images/good-or-evil/odokuro/6.jpg'
    },
    {
        name: 'Evolve: Odokuro',
        shikigamiName: 'Odokuro',
        desc: 'Can be played when defeated. Evolve: When revived, permanently gains 1[], 1[] and move. When it is defeated: Only defeated workable cards can be played.',
        type: 'Spell',
        imageSrc: './images/good-or-evil/odokuro/7.jpg'
    },

]

const CardInfoTest: CardInfo = {
    name: 'Sparkling Bubbles',
    shikigamiName: 'Akaname',
    desc: 'Description',
    type: 'Spell',
    imageSrc: './images/good-or-evil/akaname/2.jpg'
};

const DeckBuilder = () => {
    return (
        <div className='DeckBuilderContainer'>
            <div className='DeckBuilderLeft'>
                <p>Left</p>
            </div>
            <div className='DeckBuilderRight'>
                {renderCards(mockCards)}
            </div>
        </div>
    );
};

const renderCards = (cardsList: CardInfo[]) => {
    return cardsList.map(curCard => {
        return (
            <Card {...curCard} key={curCard.name} />
        )
    });
}

export default DeckBuilder;
