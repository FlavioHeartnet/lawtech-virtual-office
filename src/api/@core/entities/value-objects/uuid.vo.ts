import { v4 as uuid, validate as validateUuid } from 'uuid';
import { ValueObject } from './value-object';
export default class Uuuid extends ValueObject {
	readonly id: string;
	constructor(id?: string) {
		super();
		this.id = id || uuid();
	}

    validate(){
        const isValid = validateUuid(this.id);
        if(!isValid){
            throw new InvalidUuidError();
        }
    }
    
}

export class InvalidUuidError extends Error{
    constructor(message?: string){
        super(message || 'Invalid uuid');
        this.name = 'InvalidUuidError';
    
    }
}
