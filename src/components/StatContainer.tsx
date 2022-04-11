import React, { FC } from 'react'
import { CardInfo, CardType, StatInfo } from "../types";

import "../css/Card.css";

type StatPlacement = 'left' | 'right'
interface StatContainerProps {
    stat: StatInfo,
    placement: StatPlacement
}

const StatContainer: FC<StatContainerProps> = ({ stat, placement }) => {
    const type = stat.statType;
    const classNamePrefix = `${placement === 'left' ? 'Left' : 'Right'}Stat`

    // default: Attack
    let bgColorString = '#599498'

    switch (type) {
        case "Health":
            bgColorString = '#D63554';
            break;
        case "Fragile":
            bgColorString = '#7E6550';
            break;
        case "Shield":
            bgColorString = '#BBD294';
            break;
        case "Intensity":
            // for Field cards only
            bgColorString = '#DE4247';
            break;
    }

    return (
        <div className='StatContainer' style={{ backgroundColor: bgColorString }}>
            {/* <img className="LeftStatIcon" src={renderStatIcon(leftStat)} alt="Left Stat Icon" /> */}
            <p className='StatValue'>{stat.statValue}</p>
            {/* <p className={`${classNamePrefix}Value`}>{stat.statValue}</p> */}
        </div>
    )
}


export default StatContainer