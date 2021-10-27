export type CardType = "Shikigami" | "Combat" | "Form" | "Spell" | "Field" | "Evolve"

export type StatType = "Health" | "Shield" | "Attack" | "Intensity" | "Fragile"

export type StatInfo = {
    statType: StatType;
    statValue: number;
}

export interface CardInfo {
    name: string;
    shikigamiName: string;
    desc: string;
    imageSrc: string;
    type: CardType;
    leftStat?: StatInfo;
    rightStat?: StatInfo;
}
