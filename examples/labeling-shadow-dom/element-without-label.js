class ElementWithoutLabel extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.input = document.createElement('input');
    this.input.id = 'internal-input';
    this.shadowRoot.appendChild(this.input);
  }

}

customElements.define('element-without-label', ElementWithoutLabel);
