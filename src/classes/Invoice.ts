import {HasFormatter} from '../interfaces/HasFormatter';

export class Invoice implements HasFormatter{
    private client: string;
    readonly details: string;
    public amount: number;
    
    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    public format(): string{
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}