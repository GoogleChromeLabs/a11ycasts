/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

function addPageForPath(path) {
  let template = document.getElementById(`${path}-template`);
  let main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(template.content.cloneNode(true));
  return main.firstElementChild;
}

// For any route, check the path and
// load the corresponding template.
// Then focus the primary heading.
page('*', function(ctx) {
  let path = ctx.path.split('/')[1];
  let page = addPageForPath(path);
  let heading = page.querySelector('h1');
  heading.focus();
});
// Start on the home page
page('/zombies');
// Initialize router
page();
