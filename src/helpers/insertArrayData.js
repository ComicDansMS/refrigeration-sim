export function insertArrayData(array) {
  let newArray = []
  let arrayString = '';

  for (let index = 0; index < array.length; index++) {
    if (array[index + 1] !== undefined) {
      const midpoint = (array[index + 1] + array[index]) / 2;

      newArray.push(array[index])
      newArray.push(midpoint)

      arrayString += `${array[index]}, ${midpoint}, `;
    } else {
      arrayString += `${array[index]}`;
    }
  }

  return `[${arrayString}]`;
}