import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('form');
const fromTo = document.querySelector('#fromTo');
const details = document.querySelector('#details');
const type = document.querySelector('#type');
const amount = document.querySelector('#amount');
//List template instance 
const ul = document.querySelector('.actions');
let list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [fromTo.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    ul.setAttribute('class', 'collection');
    list.render(doc, type.value, 'start');
});
//generics 
const i = (obj) => {
    let a = { ages: 20 };
    return Object.assign(Object.assign({}, obj), a);
};
let test = i({ name: "mons", age: 20 });
console.log(test.name, test.age, test.ages);
