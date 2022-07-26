import parsers from './parser.js';
import getCompareOfTwoMassives from './make_tree.js';
//import format from './formatters/index.js';
import { resolve, extname } from 'path';
import { readFileSync } from 'fs';

//const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//const path1 = path.resolve(process.cwd(),'./__fixtures__/file1.json');
const getFormat = (filename) => extname(filename).slice(1);
const getFixturePath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename, 'utf-8'));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  // file content type string ↓
  const readFile1 = readFile(filepath1);
  const readFile2 = readFile(filepath2);

  // string to object
  const file1 = parsers(readFile1);
  const file2 = parsers(readFile2);

  // make diff tree, it is array
  const tree = getCompareOfTwoMassives(file1, file2);

  return tree;
};

export default genDiff;