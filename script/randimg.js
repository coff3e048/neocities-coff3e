// @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt X11

let randimg = document.getElementById("randimg");
let imgfooter = document.getElementById("imgfooter");

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
function randomgif() {
  var count = 0;
  function rand() {
    imgfooter.innerHTML = "randomizing .gif";
    if (count < 99) {
        randimg.src = "gif/" + gifs[Math.floor(Math.random() * gifs.length)] + ".gif";
    } else {
        randimg.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Ftroll-face-transparent-png%2Ftroll-face-transparent-png-1.png&f=1&nofb=1";
    }
    imgfooter.innerHTML = '<br>';
  }
  rand();

  randimg.onclick = function () {
    rand();
    if (count > 4) {
      imgfooter.innerHTML = "i apologise for this not being very smooth :(";
    }
    if (count > 24) {
      imgfooter.innerHTML = "but you've pretty much seen all the gifs at this point";
    }
    if (count > 49) {
      imgfooter.innerHTML = "i get it, its fun. but is this really necessary?";
    }
    if (count > 74) {
      imgfooter.innerHTML = "please stop";
    }
    if (count > 99) {
      imgfooter.innerHTML = "thats it, i'm taking it away";
    }
    count++;
  }
}
randomgif();
// @license-end