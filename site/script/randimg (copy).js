// @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt X11
const gifs = [
  "skelly",
  "cdhand",
  "monitorhell",
  "monitorkeybhell",
  "cassette",
  "roach",
  "spacelaptop",
  "laptop",
  "desktop_pizza",
  "classicdesktop",
  "imac",
  //"vapor",
  //"what",
  "motherboard",
  "vaporboard",
  "win9x",
  "abstractness",
  "brokencd",
  "skellymonitor",
  "aolfloppy1",
  "aolmacfloppy",
  "aolfloppy25",
  "pizzafloppy",
  "cursortrail",
  "95cd",
  "sd1gb",
  "alien"
];

let randimg = document.getElementById("randimg");
let imgfooter = document.getElementById("imgfooter");

var count = 0;

// Cache images so that switching doesn't look funky
async function preloadImg() {
    for (let i in gifs) {
        (new Image()).src = '/gif/' + gifs[i] + '.gif';
    }
}

function randImg() {
    let r = gifs[Math.floor(Math.random() * gifs.length)]
    if (count <= 100) {
        randimg.src = "/gif/" + r + ".gif";
        
    } else {
        randimg.src = "/images/troll.png";
    }
}

randimg.onclick = function() {
    randImg();
    var txt = "";    // Make txt variable a string, otherwise the footer will be undefined.
    if (count >= 5) { txt = ""; }
    if (count >= 25) { txt = ""; }
    if (count >= 50) { txt = ""; }
    if (count >= 75) { txt = ""; }
    if (count >= 100) { txt = "thats it, i'm taking it away"; }
    // Count corresponds to the amount of clicks on the image.
    imgfooter.innerHTML = txt;
    count++;
}

window.onload = function() {
    preloadImg(); 
    randImg();
}
// @license-end