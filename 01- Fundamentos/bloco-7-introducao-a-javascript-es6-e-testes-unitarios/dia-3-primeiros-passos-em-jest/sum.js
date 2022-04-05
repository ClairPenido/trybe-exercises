// A função sum(a, b) retorna a soma do parâmetro a com o b

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
      }
    return a + b;
  }



// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }



// a -> 1
function encode(frase1) {
  // referencia utilizada: https://blog.betrybe.com/javascript/javascript-replace/
  a1 = frase1.replace(/a/g, 1);
  e2 = a1.replace(/e/g, 2);
  i3 = e2.replace(/i/g, 3);
  o4 = i3.replace(/o/g, 4);
  u5 = o4.replace(/u/g, 5);
  return u5;

}


function decode(frase1) {
  // 1 -> a
  a1 = frase1.replace(/1/g, 'a');
  e2 = a1.replace(/2/g, 'e');
  i3 = e2.replace(/3/g, 'i');
  o4 = i3.replace(/4/g, 'o');
  u5 = o4.replace(/5/g, 'u');
  return u5;

}


  module.exports = {sum, myRemove, myFizzBuzz, encode, decode};

  