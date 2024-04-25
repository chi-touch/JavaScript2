//Stringify take an object and convert it to a String. The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj)

console.log(JSON.stringify({ x: 5, y: 6 }));

console.log(
    JSON.stringify([new Number(3), new String('false'), new Boolean(false)]),
  );

  console.log(JSON.stringify({ x: [10, undefined, function () {}, Symbol('')] }));