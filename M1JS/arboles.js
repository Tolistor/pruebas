let arbol = {
    a : "A",        // nombre de la rama
    left : {value: "B" , left: null, right:{value: "B" , left: null, right: null}}, //rama izquierda
    right : null, //rama derecha
}

function BinarySearchTree(value) {
    this.value = value,
    this.left = null,
    this.right = null
}

BinarySearchTree.prototype.add = function (value) {

}

var myTree = new BinarySearchTree (8)  // instanciamos el arbol
myTree.add(6);
console.log(myTree)

//  myTree  is          8 if (6 < 8 (root))
//                     / \
//                    6 if (4 < 6(root))  if (!root.left) inserto //si no exite inserto
//                   / \ 
//                  4

// agrego nodo
//1- creo un nuevo nodo
//2- comparo con mi value con root.value => inserto en lefth o right
//3- verificamos si la rama donde vamos a insertar este vacia
//   null => inserto => NUESTRO CASO BASE (de la recurcion)
//   not null => llamado recursivo "OJO" mi nuevo root es la rama ocupada "not null" root = 
