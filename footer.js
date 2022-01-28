const footerElement = [
  '<div class="footer">',
  '<p>',
  '<a href="/about">about</a>',
  '<a href="/">home</a>',
  '<a href="/projects">projects</a>',
  '<a href="/more.html">more</a>',
  '</p>',
  '</div>'
];
document.open();
for (let x in footerElement) {
  document.writeln(footerElement[x]);
}
document.close();
