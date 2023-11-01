// //Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// let arr = [1,2,3,0,4,5,6]
// console.log(arr.map(el => el * el))

//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// let arr = [1, 2, 3, 0, 4, 5, 6]
// console.log(arr.filter(el => el > 0))


//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
// let arr = [1, 2, -3, 0, 4, -5, 6]
// console.log((arr.filter(el => el < 0)))

//Дан массив с числами. Оставьте в нем только отрицательные числа.
//let arr = [1, 2, -3, 0, 4, 5, -6]
//console.log(arr.filter(el => el < 0))

//Дан массив с числами. Оставьте в нем только четные числа.
// let arr = [1, -2, 3, 0, 4, -5, 6]
// console.log(arr.filter(el => el > 0))

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// let str = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// console.log(str.filter(item => item.length >= 5 ))

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
// let arr = [1, 2, -3, 0, -4, 5, -6]
// console.log(arr.filter(el => el < 0))
// 0

// // [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']
// let a = [1,2,3,4,]
// let b = ['a','b','c','d']
// console.log( [...a , ...b.join('').split('')])

// // [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
// let a = [2, 3, 4, 5]
// let b = 'hello world'
// console.log( [...a, b])


// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
//let num = [2, 3, 4, 5]
//let str = ' hello world'
//console.log([num + str.split('')])

// [2, 3, 4, 5], 'hello world' =>
// [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

// function filtratin(num, str){
//     return  [...num, ...str.split('') , ...num]
// }
//
// console.log(filtratin([2, 3, 4, 5], 'hello world'))