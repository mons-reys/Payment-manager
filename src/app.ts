import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payment} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter';

const form = document.querySelector('form') as HTMLFormElement;
const fromTo = document.querySelector('#fromTo') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//List template instance 
const ul = document.querySelector('.actions') as HTMLUListElement;
let list = new ListTemplate(ul);



form.addEventListener('submit', (e:Event) =>{
    e.preventDefault();
    let doc;
    let values: [string, string, number];
    values = [fromTo.value, details.value, amount.valueAsNumber];
    
    
    if(type.value === "invoice"){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }
    
    ul.setAttribute('class', 'collection');
    list.render(doc, type.value, 'start');
})


//generics 

const i = <T extends {name: string}> (obj: T) =>{
    let a = {ages: 20};
    return {...obj,...a}
}

let test = i({name: "mons", age: 20});
console.log(test.name, test.age, test.ages);
