// clousure ejemplo
// funcion que retorna otra funcion y se ejecuta desde un entorno externo

//funcion principal
// function sumaUno(inicio) {
//     var resultado = inicio;
//     var mensaje = "Van: "
// //funcion dentro de otra funcion
//     return function(){
//         return mensaje + resultado++;
//     }
// }
// //

// //guardamos en una variable la funcion para luego ejecutarla
// var nuevaSuma = sumaUno(0);

// // entorno externo
// console.log(nuevaSuma);

// //ejecutamos la funcion llamandola por la variable
// console.log(nuevaSuma());
// console.log(nuevaSuma());
// console.log(nuevaSuma());
// console.log(nuevaSuma());
// console.log(nuevaSuma());

// //creo una nueva variable y el contador se reinicia (resultado) 
// var otraSuma = sumaUno(7);
// console.log(otraSuma());
// console.log(otraSuma());
// console.log(otraSuma());
// console.log(otraSuma());

// var otraMas = sumaUno(904);
// console.log(otraMas());
// console.log(otraMas());
// console.log(otraMas());


// function saludar (saludo) {
//     return function(nombre){
//         console.log(saludo + " " + nombre); 
//     }
// }

// var saludarHola = saludar("hola");
// console.log(saludarHola("toni"))

// var saludarHi = saludar("hi");
// console.log(saludarHi("FT 35B"))
// console.log(saludarHi("Harold"))

// usando Bind vicula
// var persona = {
//     nombre : "guille",
//     apellido : "Aszyn",
// }

// var logNombre = function() {
//     console.log(this.nombre); 
// }

// var logNombrePersona = logNombre.bind(persona);

// logNombrePersona();



var objeto = {
    altura : 5,
    base : 2
}

console.log(objeto.hasOwnProperty("altura"));
console.log(objeto.altura)