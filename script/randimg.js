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
  "vapor",
  "what",
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
imgfooter.innerHTML = '<br>';
function randomgif() {
  var count = 0;
  function rand() {
    randimg.src = "gif/" + gifs[Math.floor(Math.random() * gifs.length)] + ".gif";
  }
  randimg.onclick = function () {
    rand()
    if (count > 5) {
      imgfooter.innerHTML = "<p style='font-size: 55%; color: gray; font-style: italics;'>JavaScript is too slow to make this smooth :(</p>" 
    } else if (count > 25) {
      document.open();
      document.writeln('hello');
      document.close();
    }
    count++;
  }
}

randomgif();