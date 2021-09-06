import Ajv from 'ajv';
import schema from './example.json';
import { MyObject } from './example';
import addFormats from 'ajv-formats';

// options can be passed, e.g. {allErrors: true}
const ajv = new Ajv({ allowUnionTypes: true });
addFormats(ajv);

const data: MyObject = {
  testGlobal: { string: '' },
  stringValue: 'abcdabcdabc',
  exportString: '',
  datetime: '1963-06-19T08:30:06.283185Z',
  nullableValue: '',
  number: 20,
  numberArray: [1, 1],
  numberValue: 9,
  optionalValue: '',
  overriddenRefType: (4 as unknown) as string,
  privateString: '',
  requiredValue: 4,
  test: {
    test1: [1, 'test1'],
    test3: [1, 'test3'],
  },
  test2: {
    key3: ['key3'],
    key2: ['key2', 'key2'],
    key1: ['key1'],
  },
};

console.log(data);

const validate = ajv.compile(schema);
const valid = validate(data);
console.log('-----');
console.log('full', valid);
console.log(validate.errors);

// for (let key in data) {
//   const obj: any = { ...data };
//   delete obj[key];
//   const validate = ajv.compile(schema);
//   const valid = validate(obj);
//   console.log('-----');
//   console.log(key, valid);
//   console.log(validate.errors);
// }
