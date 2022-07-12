import _ from 'lodash';

const obj = {
    "host": "hexlet.io",
    "timeout": 50,
    "proxy": "123.234.53.22",
    "follow": false
  }
const obj2 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}

// const getMassiveFromJson = (jsonFile) => {

//     const result = []; 

//     for (var i in jsonFile) {

//       result.push([i, jsonFile [i]]);

//     }

//     return result;
// }

const getCompareOfTwoMassives = (firstMassive,secondMassive) => {

  const sameElementsOfBothMassives = [];
  const sameKeysOfMassives = [];
  const restOfMassives = [];
  const entries = Object.entries(firstMassive);
  const entriesOfSecondMassive = Object.entries(secondMassive);

    for (const [key,value] of entries ) {
      
      for (const [secondKey,secondValue] of entriesOfSecondMassive) {

        if (key === secondKey && value === secondValue) {

          sameElementsOfBothMassives.push([key,value])  

        }

        if (key === secondKey && value !== secondValue) {

          sameKeysOfMassives.push([key,value],[secondKey,secondValue])

        }
        if (key !== secondKey) {

          restOfMassives.push([key,value],[secondKey,secondValue])

        }

      }

    }

    return sameKeysOfMassives;
}

console.log(getCompareOfTwoMassives(obj,obj2))