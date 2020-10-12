import {Data} from './data';
import {APIEndpoint} from './apiLocation';

export class DataImplement extends Data {
    get apiEndpoint(): string {
        return APIEndpoint.endpoint;
    }

}