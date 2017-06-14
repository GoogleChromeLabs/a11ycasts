/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

const KEYCODE = {
  ESC: 27
};

const dialog = document.querySelector('.dialog');
const dialogMask = dialog.querySelector('.dialog__mask');
const dialogWindow = dialog.querySelector('.dialog__window');
let previousActiveElement;

function openDialog() {
  // Grab a refernce to the previous activeElement.
  // We'll want to restore this when we close the dialog.
  previousActiveElement = document.activeElement;

  // Quick and dirty way to make all of the siblings of our
  // dialog inert.
  Array.from(document.body.children).forEach(child => {
    if (child !== dialog)
      child.inert = true;
  });

  // Make the dialog visible.
  dialog.classList.add('opened');

  // Listen for things that should close the dialog.
  dialogMask.addEventListener('click', closeDialog);
  dialogWindow.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', closeDialog);
  });
  document.addEventListener('keydown', checkCloseDialog);

  // Finally, move focus into the dialog.
  dialog.querySelector('button').focus();
}

function checkCloseDialog(e) {
  if (e.keyCode === KEYCODE.ESC)
      closeDialog();
}

function closeDialog() {
  // Clean up any event listeners.
  dialogMask.removeEventListener('click', closeDialog);
  dialogWindow.querySelectorAll('button').forEach(btn => {
    btn.removeEventListener('click', closeDialog);
  });
  document.removeEventListener('keydown', checkCloseDialog);

  // Uninert our siblings.
  Array.from(document.body.children).forEach(child => {
    if (child !== dialog)
      child.inert = false;
  });

  // Hide the dialog.
  dialog.classList.remove('opened');

  // Restore focus to the previous active element.
  previousActiveElement.focus();
}
