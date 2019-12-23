import { Deserializable } from './deserializable.interface';

export class Region implements Deserializable {

    abbreviation: string = null;
    iconAbsolutePath: string = null;
    name: string = null;
    nameRef: string = null;

    public deserialize(input: any) : Region {

        for(const key in input) {
            if(this.hasOwnProperty(key)) {
                this[key] = input[key];
            }
        }

        return this;
    }

}