import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('form');
const fromTo = document.querySelector('#fromTo');
const details = document.querySelector('#details');
const type = document.querySelector('#type');
const amount = document.querySelector('#amount');
//List template instance 
const ul = document.querySelector('ul');
let list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(fromTo.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(fromTo.value, details.value, amount.valueAsNumber);
    }
    ul.setAttribute('class', 'collection');
    list.render(doc, type.value, 'start');
});
