//import getCompareOfTwoMassives from '../src/make_tree.js';

//pull JS objects

import path from 'path';
import fs from 'fs';
import process from 'process';

test("is files JSON", () => {
  const path1 = path.resolve(process.cwd(),'./__fixtures__/file1.json');
  const path2 = path.resolve(process.cwd(),'./__fixtures__/file2.json');
  const jsonFile1 = fs.readFileSync(path1, 'utf8');
  const jsonFile2 = fs.readFileSync(path2, 'utf8');
  const myJson1 = JSON.parse(jsonFile1);
  const myJson2 = JSON.parse(jsonFile2);

  expect (myJson1).toEqual(

    {
      host: 'hexlet.io',
      timeout: 50,
      proxy: '123.234.53.22',
      follow: false
    });

  expect (myJson2).toEqual(

    { timeout: 20, 
      verbose: true, 
      host: 'hexlet.io' 
    });

});




// test('compare', () => {
//     expect(reverse('hello')).toEqual('olleh');
//     expect(reverse('')).toEqual('');
//   });

//example of using ToMatch Object from Jest 
//   const user = {
//     firstName: 'tolya',
//     lastName: 'petrov',
//     age: '33',
//   };

//   expect(user).toMatchObject({ firstName: 'tolya' });
// //watch mode for terminal
//   npm run test -- --watch