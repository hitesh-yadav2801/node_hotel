// const jsonString = '{"name" : "Hitesh", "age" : 24}';
// const jsonObject = JSON.parse(jsonString);

// console.log(typeof(jsonObject));
// console.log(jsonObject);

const objToConvert = {
    name : 'Hitesh',
    age : 24,
    salary : 500000
}
const json = JSON.stringify(objToConvert);
console.log(typeof json);
console.log(json)