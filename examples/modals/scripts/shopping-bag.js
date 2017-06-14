/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

function ShoppingBag(bag, count) {
  this._el = bag;
  this._el.setAttribute('data-count', count);
  var itemPhrase = count === 1 ? `${count} item` : `${count} items`;
  this._el.setAttribute('aria-label', `${itemPhrase} in cart`);
}

var shoppingBags = document.querySelectorAll('.shopping-bag');
for (var i = 0; i < shoppingBags.length; i++) {
  // We'll fake the number of items that the user has by passing in 2
  // In a real app this would probably come from some user data in the backend
  new ShoppingBag(shoppingBags[i], 2);
}
