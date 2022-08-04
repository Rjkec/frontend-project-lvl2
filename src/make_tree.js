import _ from 'lodash';

const file1 = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}

const file2 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}

const getCompareOfTwoMassives = (firstJson,secondJson) => {

  let result = {};
  let finalResult = [];
 
  const key1 = _.keys(firstJson);
  //console.log('KEYS1',key1);
  const key2 = _.keys(secondJson);
  //console.log('KEYS2',key2);
  const sortedKey = _.sortBy(_.union(key1, key2));
  //console.log('SORTED',sortedKey);
  

  result = sortedKey.map((key) => {

    if (!_.has(file1, key)) {
      return {
        name: key,
        value: file2[key],
        type: 'added',
      };
    }
    if (!_.has(file2, key)) {
      return {
        name: key,
        value: file1[key],
        type: 'deleted',
      };
    }
    // if (_.isObject(file1[key]) && _.isObject(file2[key])) {
    //   return {
    //     name: key,
    //     type: 'nested',
    //     children: buildTree(file1[key], file2[key]),
    //   };
    // }
    if (file1[key] !== file2[key]) {
      return {
        name: key,
        value1: file1[key],
        value2: file2[key],
        type: 'changed',
      };
    }
    return {
      name: key,
      value: file1[key],
      type: 'unchanged',
    };
  });

  const sortedMassive = result.sort((elem1,elem2) => {
    if (elem1.name > elem2.name) {
      return 1;
    } else return 0;

  });

  for (const obj of sortedMassive) {

    if (obj.type === 'unchanged') {
      finalResult.push(`  ${obj.name}` + ' : ' + `${obj.value}`);
    }
    if (obj.type === 'deleted') {
      finalResult.push( `- ${obj.name}` + ' : ' + `${obj.value}`);
    }
    if (obj.type === 'added') {
      finalResult.push( `+ ${obj.name}` + ' : ' + `${obj.value}`);
    }
    if (obj.type === 'changed') {
      finalResult.push( `- ${obj.name}` + ' : ' + `${obj.value1}`);
      finalResult.push( `+ ${obj.name}` + ' : ' + `${obj.value2}`);
    }

  }
  
  // const massive = finalResult.sort();
  const res = finalResult.join('\n');

  return res;
  }
  
//console.log(getCompareOfTwoMassives(file1,file2))

export default getCompareOfTwoMassives;