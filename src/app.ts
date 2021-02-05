import {Invoice} from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter';

const form = document.querySelector('form') as HTMLFormElement;
const fromTo = document.querySelector('#fromTo') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


let moc = new Invoice("mons", "hzloo", 20);
console.log(moc);

form.addEventListener('submit', (e:Event) =>{
    e.preventDefault();
    let doc;
    if(type.value === "invoice"){
        doc = new Invoice(fromTo.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(fromTo.value, details.value, amount.valueAsNumber);
    }
    

   console.log(doc);
})