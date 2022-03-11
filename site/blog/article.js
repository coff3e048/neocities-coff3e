function prntarticle(link, img, title, content) {
    const articleElement = [
        '<div class="article">',
        '<a style="float:left; href='+link+'><img src='+img+' width=175px></img>',
        '<h3>'+title+'</a></h3><br>',
        '<p>'+content+'</p></div>'
    ];
    document.open();
    for (let x in articleElement) {
        document.writeln(x);
    }
    document.close();
}

prntarticle("/blog/2.html","/gif/brokencd.gif","The Future of Physical (Digital) Media","<i>Physical</i> Digital Media has been a part of our lives for several years now. So, how is it holding up?")