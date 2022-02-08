// @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt X11
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
// @license-end