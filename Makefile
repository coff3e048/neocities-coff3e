SHELL := /bin/bash 

all:
	make build && make upload

build:
	@echo "Building Sass (.scss) -> CSS (.css)"
	npx sass src/sass/dropdown.scss site/dropdown.css &
	npx sass src/sass/icon.scss site/icon.css &
	npx sass src/sass/style.scss site/style.css

	@echo "Compiling CoffeeScript (.coffee) -> JavaScript (.js)"
	npm install --save-dev --force coffeescript \
	&& ./node_modules/coffeescript/bin/coffee --compile --output ./site/script ./src/coffee \
	&& rm -r ./node_modules/ ./package-lock.json \
	&& echo "Done."

upload:
	cd ./site \
    && npx neocel \
    && echo Done.