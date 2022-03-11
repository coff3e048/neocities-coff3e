# @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt X11
gifs = [
  'skelly'
  'cdhand'
  'monitorhell'
  'monitorkeybhell'
  'cassette'
  'roach'
  'spacelaptop'
  'laptop'
  'desktop_pizza'
  'classicdesktop'
  'imac'
  'motherboard'
  'vaporboard'
  'win9x'
  'abstractness'
  'brokencd'
  'skellymonitor'
  'aolfloppy1'
  'aolmacfloppy'
  'aolfloppy25'
  'pizzafloppy'
  'cursortrail'
  '95cd'
  'sd1gb'
  'alien'
]

randimg = document.getElementById("randimg");
imgfooter = document.getElementById("imgfooter");

preloadImg = ->
    for i in gifs
        (new Image()).src = '/gif/' + gifs[i] + '.gif'

count = 0

randImg = ->
    r = gifs[Math.floor(Math.random() * gifs.length)]
    if count <= 100
        randimg.src = "/gif/" + r + ".gif"
    else
        randimg.src = "/images/troll.png";

        
randimg.onclick = ->
    txt = ""
    # placeholders
    randImg()
    if (count >= 5)
        txt = ""
    if (count >= 25) 
        txt = "";
    if (count >= 50)
        txt = ""
    if (count >= 75) 
        txt = ""
    if (count >= 100) 
        txt = "lol"
    # Count corresponds to the amount of clicks on the image.
    imgfooter.innerHTML = txt
    count++

    
window.onload = ->
    preloadImg()
    randImg()
# @license-end