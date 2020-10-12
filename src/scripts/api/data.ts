import { DataObject } from "./DataObject";

export abstract class Data {
    abstract get apiEndpoint() :string

    async getData(success: (a: DataObject) => void, failed: (a: string) => void) {
        try {
            const request = await fetch(this.apiEndpoint);
            const json = await request.json();
            success(json)
        } catch (error) {
            failed(error)
        }
    }
} 