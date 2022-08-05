import path from 'path';
import fs from 'fs';
import process from 'process';

//const getFormat = (filename) => extname(filename).slice(1);

const path1 = path.resolve(process.cwd(),'./__fixtures__/file1.json');
const path2 = path.resolve(process.cwd(),'./__fixtures__/file2.json');
const jsonFile1 = fs.readFileSync(path1, 'utf8');
const jsonFile2 = fs.readFileSync(path2, 'utf8');

//console.log('path', process.cwd())
export const myJson1 = JSON.parse(jsonFile1);
export const myJson2 = JSON.parse(jsonFile2);

console.log(myJson1);