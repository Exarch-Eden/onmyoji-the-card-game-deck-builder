import React, { FC, useReducer, useEffect } from "react";
import { CardInfo, CardType } from "../types";

import "../css/Card.css";

import ASSETS from "../assets/assets";

const Card: FC<CardInfo> = ({ name, shikigamiName, desc, imageSrc, type }) => {
    const [cardType, cardDispatch] = useReducer(cardReducer, "ShikigamiCard");

    useEffect(() => {
        console.log("type: ", type);

        cardDispatch({ type: type });
    }, [type]);

    return (
        <div className={`CardBackground ${cardType}`}>
            <div className={`Card ${cardType}`}>
                {type === "Field" ? <div className="FieldCardTop"></div> : null}
                <img
                    className="CardImage"
                    src={imageSrc}
                    alt={`${name} Card`}
                />
                <div className="CardDescriptionContainer">
                    <p className="CardName">{name}</p>
                    <p className="CardDescriptionText">{desc}</p>
                    {renderDescBackground(type)}
                </div>
                <div className="CardBottom">
                    <p>
                        {shikigamiName} - {type === "Evolve" ? "Spell" : type}
                    </p>
                </div>
            </div>
        </div>
    );
};

const renderDescBackground = (type: CardType) => {
    const cName = "CardDescriptionBackground";
    const alt = "Description Container";

    if (type === "Shikigami" || type === "Form") {
        return <img className={cName} src={ASSETS.formDesc} alt={alt} />;
    } else if (type === "Combat") {
        return <img className={cName} src={ASSETS.combatDesc} alt={alt} />;
    } else if (type === "Field") {
        return <img className={cName} src={ASSETS.fieldDesc} alt={alt} />;
    } else {
        // Evolve or Spell types
        return <img className={cName} src={ASSETS.spellDesc} alt={alt} />;
    }
};

const cardReducer = (state: string, action: { type: CardType }): string => {
    let cardType = "ShikigamiCard";

    switch (action.type) {
        case "Combat":
            cardType = "CombatCard";
            break;
        case "Evolve":
            cardType = "EvolveCard";
            break;
        case "Spell":
            cardType = "SpellCard";
            break;
        case "Field":
            cardType = "FieldCard";
            break;
        case "Form":
            cardType = "FormCard";
            break;
    }

    return cardType;
};

export default Card;
