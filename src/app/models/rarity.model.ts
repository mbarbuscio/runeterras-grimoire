import { Deserializable } from './deserializable.interface';

export class Rarity implements Deserializable {

    name: string = null;
    nameRef: string = null;

    public deserialize(input: any) : Rarity {

        for(const key in input) {
            if(this.hasOwnProperty(key)) {
                this[key] = input[key];
            }
        }

        return this;
    }

}