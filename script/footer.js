const footerElement = [
  '<div class="footer">',
  '<p>',
  '<a href="/blog">blog</a>',
  '<a href="/about.html">about</a>',
  '<a href="/index.html">home</a>',
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