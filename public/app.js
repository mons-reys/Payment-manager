import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('form');
const fromTo = document.querySelector('#fromTo');
const details = document.querySelector('#details');
const type = document.querySelector('#type');
const amount = document.querySelector('#amount');
let moc = new Invoice("mons", "hzloo", 20);
console.log(moc);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(fromTo.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(fromTo.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
