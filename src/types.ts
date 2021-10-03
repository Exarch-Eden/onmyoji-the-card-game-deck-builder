export type CardType = "Shikigami" | "Combat" | "Form" | "Spell" | "Field" | "Evolve"

export interface CardInfo {
    name: string;
    shikigamiName: string;
    desc: string;
    imageSrc: string;
    type: CardType;
}
