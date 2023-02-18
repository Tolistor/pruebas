//listas simplemente enlazadas
// se compone por nodos (cada elelmento de la lista es un nodo)


// var newList = {
//     length : 0,    
//     head: {  //primer nodo
//         data: 7,
//         next: { //segundo nodo
//             data: 9,
//             next: { //terer nodo
//                 data: 5,
//                 next: null
//             }
//         }
//     }
// }


//funcion constructora de lo anterior (una lista)
// funcion creadora de lista
//
function List () {
    this._length = 0;
    //primer nodo
    this.head = null;
}

//funcion creadora de nodos (para la lista)
function Node (value) {
    this.value = value
    this.next = null;
}

List.prototype.add = function (value) {
    var newNode = new Node(value);
    console.log(newNode)
    //current (puntero)
    var current = this.head;
    if (!current) {
        this.head = newNode;
        this._length++;
        return newNode;
    }
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
    this._length++;
    return newNode;
}

var myList = new List(); //instancio una lista

//myList.head = {value:7 , next:null}; //asi se agregaria de forma lenta un nodo
myList.add(7)
myList.add(9)
myList.add(5)
console.log(myList)

