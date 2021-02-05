export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(doc, heading, position) {
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
