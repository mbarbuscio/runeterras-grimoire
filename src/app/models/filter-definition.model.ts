export class FilterDefinition {
    key: string;
    value: any;
    // tslint:disable-next-line: ban-types
    filterDef: (filterElement, value) => boolean;
}