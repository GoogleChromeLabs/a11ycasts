/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

var VK_UP = 38;
var VK_DOWN = 40;

var announcer = document.querySelector('#announcer');

function announce(text) {
  announcer.textContent = text;
}

function SpinButton(spinbutton) {
  this._el = spinbutton;
  this._minValue = parseInt(spinbutton.getAttribute('aria-valuemin'), 10);
  this._maxValue = parseInt(spinbutton.getAttribute('aria-valuemax'), 10);
  this._number = spinbutton.querySelector('.number');
  this._number.value = 0;
  this._add = spinbutton.querySelector('.add');
  this._subtract = spinbutton.querySelector('.subtract');

  this._add.addEventListener('click', this.increment.bind(this));
  this._subtract.addEventListener('click', this.decrement.bind(this));
  this._el.addEventListener('keydown', this.onKeydown.bind(this));
}

SpinButton.prototype = {
  updateValue: function(increment) {
    var oldValue = this._number.textContent;
    var newValue = parseInt(oldValue, 10) + increment;
    if (newValue < this._minValue || newValue > this._maxValue)
      return;
    this._number.textContent = newValue;
    this._el.setAttribute('aria-valuenow', newValue);
    announce(newValue);
  },

  increment: function() {
    this.updateValue(1);
  },

  decrement: function() {
    this.updateValue(-1);
  },

  onKeydown: function(e) {
    switch (e.keyCode) {
      case VK_UP:
        this.increment();
        e.stopPropagation();
        e.preventDefault();
        break;
      case VK_DOWN:
        this.decrement();
        e.stopPropagation();
        e.preventDefault();
        break;
    }
  }
}


var spinbuttons = document.querySelectorAll('.spinbutton');
for (var i = 0; i < spinbuttons.length; i++) {
  new SpinButton(spinbuttons[i]);
}
