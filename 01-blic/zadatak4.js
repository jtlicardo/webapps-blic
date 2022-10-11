let obj = {
  1: [143, "A", 21],
  2: "B",
  3: [12, 11, "C"],
}

let func = (obj) => {
  values = []
  for (const [key, value] of Object.entries(obj)) {
    values.push(value)
  }
  let arrays = []
  for (let el of values) {
    if (Array.isArray(el)) arrays.push(el)
  }
  for (let array of arrays) {
    let sum = 0
    for (let el of array) {
      if (Number.isInteger(el)) {
        sum += el
      }
    }
    array.push(sum)
  }
  let tempArrays = []
  let tempArray = []
  for (let array of arrays) {
    let lastNum = array.pop()
    for (let el of array) {
      if (!Number.isInteger(el)) tempArray.push(el)
    }
    tempArray.push(lastNum)
    tempArrays.push(tempArray)
  }
  return tempArrays
}

console.log(func(obj))
