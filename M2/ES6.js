// console.log(manzana)
// var manzana ="man"

// const sum = function (num) {
//     return num++
// }

// const suma = num => num ++;

// var bob = {
//     _name: "Bob",
//     _friends: ["Messi", "Homero"],
//     printFriends () {
//         let that = this;
//         that._friends.forEach(function(f){
//             console.log(this._name + " knows " + f)
//         })
//     }
// }




// var bob = {
//     _name: "Bob",
//     _friends: ["Messi", "Homero"],
//     printFriends () {        
//         this._friends.forEach(f =>
//             console.log(this._name + " knows " + f))
//         }
//     }

// bob.printFriends();

//class
//----------------------------------------------------------------

// class Personas {
//     constructor (nombre = 'franco', apellido = 'Etcheverri'){
//         this.nombre = nombre,
//         this.apellido = apellido
//     }
//     getNombre() {
//         return this.nombre +" " + this.apellido; }
// }


//objetos literales
//----------------------------------------------------------------

// const obj = {};
// const arr = [];

// atajos propiedad propiedad
// function prueba (nombre, apellido) {
//     return {
//         nombre,//  nombre:nombre,
//         apellido,// apellido:apellido,
//     }
// }


// nombre de propiedad dinamico
// function prueba (nombre, apellido, propiedad, valor) {
//     return {
//         nombre,//  nombre:nombre,
//         apellido,// apellido:apellido,
//         [propiedad]: valor
//     }
// }

// console. log (prueba ("Homero", "simsom","edad" , 40))

//----------------------------------------------------------------
//template String

// const nombre = "Homero";
// console.log("hola " + nombre +" Como estas")
// console.log(`Hola ${nombre} Como estas?`) // Alt 96 ``

//----------------------------------------------------------------
// destructing
// let arr = [1,2,3,4,5];
// let [a,b, ,c] = arr
// console.log (c);


// let persona = {
//     nombre: "Homero",
//     apellido: "simson",
//     edad: 40,
// }

// let {nombre, apellido } = persona;
// console.log(persona.nombre)
// console.log(nombre)

//----------------------------------------------------------------
// defailt + rest +spread

// function suma (x, y = 2) {  //default
//     return x + y;
// }

// console.log(suma(2));

// rest operator
// function suma (x, ...y) {  // rest operator
//     console.log(x)
//     console.log(y)
//     let contador = x
//     for (const numero of y) {
//         contador += numero
//     }
//     return contador
//     }
//     console.log(suma(2, 3, 4 , 5, 6));


//Spread operator
// let array1 = [0, 1]
// let array2 = [2, 3]

// let array3 = [...array2];
// let array4 = [...array1, ...array2];

// console.log(array4)

//----------------------------------------------------------------

// promesas

// function timeout ( duration = 0) {
//     return new Promise((resolve, reject) => {
//         setTimeout (resolve, duration);
//     })
// }
