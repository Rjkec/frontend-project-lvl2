import _ from 'lodash';

const getCompareOfTwoMassives = (firstJson,secondJson) => {

  let result = {};
 
  const key1 = _.keys(firstJson);
  const key2 = _.keys(secondJson);
  const sortedKey = _.sortBy(_.union(key1, key2));
  
  result = sortedKey.map((key) => {

    if (!_.has(firstJson, key)) {
      return {
        name: key,
        value: secondJson[key],
        type: 'added',
      };
    }

    if (!_.has(secondJson, key)) {
      return {
        name: key,
        value: firstJson[key],
        type: 'deleted',
      };
    }

    if (_.isObject(firstJson[key]) && _.isObject(secondJson[key])) {
      return {
        name: key,
        type: 'nested',
        children: buildTree(firstJson[key], fsecondJson[key]),
      };
    }

    if (firstJson[key] !== secondJson[key]) {
      return {
        name: key,
        value1: firstJson[key],
        value2: secondJson[key],
        type: 'changed',
      };
    }

    return {
      name: key,
      value: firstJson[key],
      type: 'unchanged',
    };
  }
  )
  
  return result;
  
}

export default getCompareOfTwoMassives;