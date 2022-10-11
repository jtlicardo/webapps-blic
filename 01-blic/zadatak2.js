let str = "Javascript i nije tolko los"

let func = (str) => {
  length = str.length
  x = Math.floor(length / 2)
  return str.substr(x)
}

console.log(func(str))
