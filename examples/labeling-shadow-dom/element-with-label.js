class ElementWithLabel extends HTMLElement {

  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.label = document.createElement('label');
    this.input = document.createElement('input');
    this.input.id = 'internal-input';
    this.label.htmlFor = this.input.id;
    this.shadowRoot.appendChild(this.label);
    this.shadowRoot.appendChild(this.input);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'label' && newVal) {
      this.label.textContent = newVal;
    }
  }

}

customElements.define('element-with-label', ElementWithLabel);
