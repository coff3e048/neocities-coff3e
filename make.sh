#!/bin/bash  
fnpm='.npm'
coffee=$fnpm'/node_modules/coffeescript/bin/coffee'
neocel=$fnpm'/node_modules/neocel/index.js'
dartsass='dart-sass-1.49.8-linux-x64.tar.gz'
sass=$fnpm'/'$dartsass

echo "Checking for programs at:"
echo "coffeescript: "$coffee
echo "neocel: "$coffee
echo "sass: "$sass
if ! [ -f $coffee ] && ! [ -f $neocel ]; then
	echo "Running npm to get needed packages"
	npm install --save-dev coffeescript neocel
fi

if ! [ -f $dartsass ]; then
	wget https://github.com/sass/dart-sass/releases/download/1.49.8/$dartsass
	tar -xvf $dartsass
fi
echo "Building Sass (.scss) -> CSS (.css)"
./dart-sass/sass src/sass/dropdown.scss site/dropdown.css
./dart-sass/sass src/sass/icon.scss site/icon.css
./dart-sass/sass src/sass/style.scss site/style.css

rm ./$dartsass
rm -r './dart-sass'


echo "Compiling CoffeeScript (.coffee) -> JavaScript (.js)"
$coffee --compile --output ./site/script ./src/coffee     

echo "Done."
#cd ./site
#./../$neocel --token $NEOCITIES_TOKEN 