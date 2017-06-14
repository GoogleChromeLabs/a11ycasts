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
