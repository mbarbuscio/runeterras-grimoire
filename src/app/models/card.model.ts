import { Deserializable } from './deserializable.interface'


export class Card implements Deserializable {
    associatedCards: Array<any> = null;
    associatedCardRefs: Array<string> = null;
    assets: Array<AssetUrl> = null;
    region: string = null;
    regionRef: string = null;
    attack: number = null;
    cost: number = null;
    health: number = null;
    description: string = null;
    descriptionRaw: string = null;
    levelupDescription: string = null;
    levelupDescriptionRaw: string = null;
    flavorText: string = null;
    name: string = null;
    cardCode: string = null;
    keywords: Array<string> = null;
    keywordRefs: Array<string> = null;
    spellSpeed: string = null;
    spellSpeedRef: string = null;
    rarity: string = null;
    rarityRef: string = null;
    subtype: string = null;
    subtypes: Array<string> = null;
    supertype: string = null;
    type: string = null;
    collectible: boolean = null;

    public deserialize(input: any) : Card {

        for(const key in input) {
            if(this.hasOwnProperty(key)) {
                this[key] = input[key];
            }
        }

        return this;
    }
}

export class AssetUrl {
    gameAbsolutePath: string;
    fullAbsolutePath: string;
}