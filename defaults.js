const pageDefaults = [
  '<link rel="icon" href="/gif/classicdesktop.gif">',
  '<meta name="viewport" content="width=device-width,initial-scale=1">'
];
document.open();
for (let x in pageDefaults) {
  document.writeln(pageDefaults[x]);
}
document.close();
