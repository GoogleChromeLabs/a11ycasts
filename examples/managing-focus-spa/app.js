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
