gendiff:
	node bin/gendiff.js -h

gendiff_first:
	node bin/gendiff.js file1.json file2.json

lint:
	eslint --fix .