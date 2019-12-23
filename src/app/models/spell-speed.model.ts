import { Deserializable } from './deserializable.interface';

export class SpellSpeed implements Deserializable {

    name: string = null;
    nameRef: string = null;

    public deserialize(input: any) : SpellSpeed {

        for(const key in input) {
            if(this.hasOwnProperty(key)) {
                this[key] = input[key];
            }
        }

        return this;
    }

}