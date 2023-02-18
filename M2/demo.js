

let newDiv = document.createElement('div');//creamos nuevo div
newDiv.setAttribute("id", "newDiv")//setiamos un atributo
newDiv.style.backgroundColor = "cyan"; //agregamos estilos
//<div> id= "newDiv" style background = cyan </div>

document.body.appendChild(newDiv);//lo agregamos al body

let newList = document.createElement("ul");
let newItem1 = document.createElement("li");
newItem1.innerText = "item 1";
let newItem2 = document.createElement("li");
newItem2.innerText = "item <strong>2</strong>";

newList.appendChild(newItem1); //agregamos cada item a la lista
newList.appendChild(newItem2);
newDiv.appendChild(newList); // agregamos al nuevo div la lista

let myButton = document.querySelector("#button");
let = contador = 3;
myButton.addEventListener("click", function(evento) {
    console.log(evento)
    let newItem = document.createElement("li");
    newItem1.innerText = "Item" + contador;
    newList.appendChild(newItem);
    contador++;
} )

// newDiv.addEventListener("click", function(e){
//     if (newDiv.style.backgroundColor === "cyan"){
//         newDiv.style.backgroundColor = "red"
//     }else {
//         newDiv.style.backgroundColor = "cyan"
//     }
// })

fetch(`http://localhost:5000/amigos/${id}`, {
    method: 'DELETE'
})
.then(response => {
    if (response.ok) {
    console.log("Elemento borrado exitosamente");
    } else {
    console.error("Error al borrar el elemento");
    }
})
.catch(error => console.error("Error al borrar el elemento:", error))

// let allDivs = document.querySelectorAll("#div")
// //[]

// for (let i = 0; i < allDivs.length; i){
//     allDivs[i].addEventListener("click", function(e){
//         console.log(e.target)
//         let selectedDiv = e.target;
//         if (selectedDiv.style.backgroundColor === "plum"){
//             selectedDiv.style.backgroundColor = "red"
//         }else {
//             selectedDiv.style.backgroundColor = "plum"
//         }
//     })
    
// }