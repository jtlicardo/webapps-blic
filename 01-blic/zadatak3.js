let arr = [321, 63, "Marmelada", 4, "Kruh", 1, 1234, "Tanjur", 50]

let func = (arr) => {
  let integers = []
  let strings = []
  for (let el of arr) {
    if (Number.isInteger(el)) integers.push(el)
  }
  for (let el of arr) {
    if (typeof el === "string") strings.push(el)
  }
  integers.sort(function (a, b) {
    return a - b
  })
  strings.sort(function (a, b) {
    return a.length - b.length
  })
  for (let el of strings) {
    integers.push(el)
  }
  return integers
}

console.log(func(arr))
