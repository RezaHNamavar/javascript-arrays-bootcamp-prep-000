var chocolateBars = [
  "snickers", "hundred grand", "kitkat", "skittles"]
<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
=======
function AddElementToBeginningOfArray(array, element) {
  return [element, ...array]
>>>>>>> f798ae9361d7525ba80728fe4ffdf00ffbee5eb7
  
}
  
function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}
function accessElementInArray(array,index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
=======
  array = array.unshift(element)
  return array
>>>>>>> f798ae9361d7525ba80728fe4ffdf00ffbee5eb7
}