import { Deserializable } from './deserializable.interface';

export class Keyword implements Deserializable {

    name: string = null;
    nameRef: string = null;
    description: string = null;

    public deserialize(input: any) : Keyword {

        for(const key in input) {
            if(this.hasOwnProperty(key)) {
                this[key] = input[key];
            }
        }

        return this;
    }

}