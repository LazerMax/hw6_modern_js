export default function orderByProps(obj, arrOfFirstValue) {
  const tmp1Arr = [];
  let tmp2Arr = [];

  for (const key in obj) {
    const newObject = {};
    newObject.key = key;
    newObject.value = obj[key];

    if (arrOfFirstValue.includes(key)) {
      tmp1Arr.push(newObject);
    } else {
      tmp2Arr.push(newObject);
    }
  }

  tmp2Arr = tmp2Arr.sort((x, y) => x.key.localeCompare(y.key));

  const resultArr = tmp1Arr.concat(tmp2Arr);

  return resultArr;
}
