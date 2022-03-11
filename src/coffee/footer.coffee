# @license magnet:?xt=urn:btih:5305d91886084f776adcf57509a648432709a7c7&dn=x11.txt X11
footerElement = """<div class="footer">
    <p>
    <a onclick=history.back()> < </a>
    <a href="/about">about</a>
    <a href="/">home</a>
    <a href="/projects">projects</a>
    <a href="/more">more</a>
    <a onclick=history.forward()> > </a>
    </div>
    </p>"""
document.open()
document.writeln(footerElement)
document.close()
# @license-end