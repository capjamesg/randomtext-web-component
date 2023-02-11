class RandomText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        var new_paragraph = document.createElement('p');
        new_paragraph.innerText = this.randomText();
        this.shadowRoot.appendChild(new_paragraph);
    }
    connectedCallback() {
        this.shadowRoot.querySelector('p').innerText = this.randomText();

    }
    randomText() {
        return choices[Math.floor(Math.random() * choices.length)];
    }
}
customElements.define('random-text', RandomText);