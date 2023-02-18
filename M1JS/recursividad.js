
//recursividad
var arr = [] ;
var arr = [] ;
function suma (num) {
    
    // caso base
    if (num === 1){
        return 1; //retornaria 1
    } else {
        //llamado recursivo se llama a si mismo
         //ira restando uno el numero ingresado
        arr.push ( num + suma(num - 1) );
        return num + suma(num - 1);
        
    }   
    
}

console.log (suma(3))
console.log (arr)

// ----------------------------------------------------------------

//factorial 

// factorial
// !0 =1
// !1 = 1
// ! 2 = 2 !1 * !0
// !2 = 2

// !5 = 5 * !4
//    = 5 *  4 * !3
//    = 5 *  4 *  3 * !2
//    = 5 *  4 *  3 *  2 * !1

// function factorial (num) {
//     //caso base
//     if (num === 1 || num === 0) {
//         return 1;
//     }
//     // llamado recursivo
//     return num * factorial(num -1)

// }

// console.log(factorial(1))
// console.log(factorial(0))
// console.log(factorial(5))
//----------------------------------------------------------------

// stack no es recursividad
// pilas
// function stack () {
//     this.arr = [];
// }

// stack.prototype.add = function (value) {
//     this.arr.push(value);
// }

// stack.prototype.remove = function () {
//     this.arr.pop();
// }

// stack.prototype.size = function () {
//     return this.arr.length;
// }

// var miStack = new stack(); // [...]
// miStack.add(7) //agrego el 7
// miStack.add(5) //agrego el 5
// miStack.add(8) //agrego el 8

// miStack.remove() // saco el 8

// miStack.size()

// console.log(miStack);
// console.log(miStack.size());

// add => push =>[ 1, 2, 5, 9]
//remove => pop =>[ 1, 2, 5,]
//size => .length => 3  

// ternario ejemplo
// ----------------------------------------------------------------
// var hola = false ? 7 : 0
// var chao = true ? 7 : 0
// console.log (hola)
// console.log (chao)

// fibonaci----------------------------------------------------
// function nFibonacci(n) {
// //caso base
//     if (n === 0) {
//         return 0 ;
//     }else if (n === 1) {
//         return 1 ;
//     }else {
//         //llamado recursivo
//         return nFibonacci(n -1) + nFibonacci(n - 2) 
//     }  

// }

// console.log(nFibonacci(12))

//----------------------------------------------------------------
//

function Queue() {
    this.cache = [];
}

Queue.prototype.enqueue = function(valor){
this.cache.push(valor);
}

Queue.prototype.dequeue = function(valor){
    return (this.cache.shift());

}

Queue.prototype.size = function(){  
    return this.cache.length  
}


var queue = new Queue();

queue.enqueue("primero")
queue.enqueue("segundo")
queue.enqueue("tercero")

console.log(queue.size())
queue.dequeue()

console.log(queue.dequeue())
console.log(queue)
console.log(queue.size())