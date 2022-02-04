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
    randimg.src = "gif/" + gifs[Math.floor(Math.random() * gifs.length)] + ".gif";
    imgfooter.innerHTML = '<br>';
  }
  rand();

  randimg.onclick = function () {
    rand();
    if (count > 4) {
      imgfooter.innerHTML = "JavaScript is too slow to make this smooth :(";
    } else if (count > 24) {
      document.open();
      document.writeln('hi');
      document.close();
    }
    count++;
  }
}
randomgif();