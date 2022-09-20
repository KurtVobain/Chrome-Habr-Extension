window.addEventListener('click', function () {
    const sidebar = document.querySelectorAll(
    ".tm-sexy-sidebar," +
    " .tm-sexy-sidebar_stick-top," +
    " .tm-page__sidebar");

for (let i = 0; i < sidebar.length; i++) {
  // If sider is here
  // add attribute display: None
  sidebar.item(i).setAttribute("style", "display:none;");
  }
});
