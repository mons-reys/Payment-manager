import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate{
    constructor(private container: HTMLUListElement){}

    render(doc: HasFormatter, heading: string, position: 'start' | 'end'){

        const html = ` 
        <li class="collection-item avatar">
          <i class="material-icons circle">folder</i>
          <span class="title">${heading}</span>
          <p>
            ${doc.format()}
          </p>
          <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
        </li>
        `;


      this.container.innerHTML += html;

    }
}