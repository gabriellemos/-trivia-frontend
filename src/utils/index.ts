export const shuffle = (arr: Array<any>) => {
  let index = 0
  let nArray = [...arr]
  while (index < nArray.length) {
    const swapIndex = Math.floor(Math.random() * arr.length)
    const auxElement = nArray[swapIndex]
    nArray[swapIndex] = nArray[index]
    nArray[index] = auxElement
    index++
  }
  return nArray
}
