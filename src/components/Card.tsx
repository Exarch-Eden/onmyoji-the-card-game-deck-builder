import React, { FC, useReducer, useEffect } from "react";
import { CardInfo, CardType } from "../types";

import "../css/Card.css";

const reducer = (state = "ShikigamiCard", action: { type: CardType }) => {
    console.log("action.type: ", action.type);

    let cardType = state;
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

const Card: FC<CardInfo> = ({ name, desc, imageSrc, type }) => {
    const [cardType, dispatch] = useReducer(reducer, "ShikigamiCard");

    useEffect(() => {
        console.log("type: ", type);

        dispatch({ type: type });
    }, [type]);

    return (
        <div className={`CardBackground ${cardType}`}>
            <div className={`Card ${cardType}`}>
                <img
                    className="CardImage"
                    src={imageSrc}
                    alt={`${name} Card`}
                />
            </div>
        </div>
    );
};

export default Card;
