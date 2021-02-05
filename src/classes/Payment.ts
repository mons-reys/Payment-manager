import {HasFormatter} from '../interfaces/hasFormatter';

export class Payment implements HasFormatter{
    private recipient: string;
    readonly details: string;
    public amount: number;
    
    constructor(c: string, d: string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    
    format(){
        return `${this.recipient} owed $ ${this.amount} for ${this.details}`;
    }
} 