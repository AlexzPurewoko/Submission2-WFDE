
export interface DataItem {
    readonly id: string,
    readonly name: string,
    readonly description: string,
    readonly pictureId: string,
    readonly city: string,
    readonly rating: number
};

export interface DataObject {
    readonly restaurants: Array<DataItem>
}