const footerElement = [
  '<div class="footer">',
  '<p>',
  '<a href="/about.html">about</a>',
  '<a href="/">home</a>',
  '<a href="/projects.html">projects</a>',
  '<a href="/more.html">more</a>',
  '</div>',
  '</p>'
];
document.open();
for (let x in footerElement) {
  document.writeln(footerElement[x]);
}
document.close();