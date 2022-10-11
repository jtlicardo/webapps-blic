let obj = {
  1: [143, "A", 21],
  2: "B",
  3: [12, 11, "C"],
}

let arraySumNumbers = (arr) => {
  let sum = 0
  for (let el of arr) {
    if (Number.isInteger(el)) sum += el
  }
  return sum
}

let arrayRemoveIntegers = (arr) => {
  let temp = []
  for (let el of arr) {
    if (!Number.isInteger(el)) temp.push(el)
  }
  return temp
}

let func = (obj) => {
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let newValues = []
  for (let value of values) {
    if (Array.isArray(value)) {
      let sum = arraySumNumbers(value)
      let newArr = arrayRemoveIntegers(value)
      if (sum % 2 === 0) {
        newArr.push(Math.sqrt(sum).toFixed(2))
      }
      newValues.push(newArr)
    } else newValues.push(value)
  }
  const newObject = {}
  for (let i = 0; i < keys.length; i++) {
    newObject[keys[i]] = newValues[i]
  }
  return newObject
}

console.log(func(obj))
