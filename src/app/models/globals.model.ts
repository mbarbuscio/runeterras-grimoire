import { Deserializable } from './deserializable.interface';
import { Keyword } from './keyword.model';
import { Region } from './region.model';
import { SpellSpeed } from './spell-speed.model';
import { Rarity } from './rarity.model';

export class Globals implements Deserializable {

    keywords: Array<Keyword>;
    regions: Array<Region>;
    spellSpeeds: Array<SpellSpeed>;
    rarities: Array<Rarity>;

    constructor() {
        this.keywords = new Array<Keyword>();
        this.regions = new Array<Region>();
        this.spellSpeeds = new Array<SpellSpeed>();
        this.rarities = new Array<Rarity>();
    }

    public deserialize(input: any): Globals {

        input.keywords.forEach((keyword) => { this.keywords.push(new Keyword().deserialize(keyword))});
        input.regions.forEach((region) => { this.regions.push(new Region().deserialize(region))});
        input.spellSpeeds.forEach((spellSpeed) => { this.spellSpeeds.push(new SpellSpeed().deserialize(spellSpeed))});
        input.rarities.forEach((rarity) => { this.rarities.push(new Rarity().deserialize(rarity))});

        return this;
    }

}