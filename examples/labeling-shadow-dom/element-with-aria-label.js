class ElementWithAriaLabel extends HTMLElement {

  static get observedAttributes() {
    return ['label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.button = document.createElement('button');
    this.button.textContent = "❤️";
    this.shadowRoot.appendChild(this.button);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'label' && newVal) {
      this.button.setAttribute('aria-label', newVal);
    }
  }

}

customElements.define('element-with-aria-label', ElementWithAriaLabel);
