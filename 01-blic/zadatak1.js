let arr = [{ 1: "A" }, { 1: "C", 2: "A" }, { 2: "C" }]

let func = (arr) => {
  let temp = []
  for (let el of arr) {
    if (Object.keys(el).length === 1) temp.push(el)
  }
  return temp
}

console.log(func(arr))
