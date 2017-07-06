/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

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
