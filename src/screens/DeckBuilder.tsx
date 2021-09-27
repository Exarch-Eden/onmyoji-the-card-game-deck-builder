import React from 'react'
import Card from '../components/Card'

import '../css/DeckBuilder.css'
import { CardInfo } from '../types'

const CardInfoTest: CardInfo = {
    name: 'Akaname',
    desc: 'Description',
    type: 'Spell',
    imageSrc: './images/akaname/2.jpg'
}

const DeckBuilder = () => {
  return (
    <div className="DeckBuilderContainer">
        <div className="DeckBuilderLeft"><p>Left</p></div>
        <div className="DeckBuilderRight">
            <p>Right</p>
            <Card {...CardInfoTest} />
        </div>
      {/* <p>This is Deck Builder</p> */}
    </div>
  )
}

export default DeckBuilder
