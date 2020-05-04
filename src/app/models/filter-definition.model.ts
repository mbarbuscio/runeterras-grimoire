export class FilterDefinition {
    key: string;
    value: string;
    // tslint:disable-next-line: ban-types
    filterDef: (filterElement, value) => boolean;
}