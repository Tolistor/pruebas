
function BinarySearchTree (value) {
    this.value = value;
    this.left =null;
    this.right =null;
}

// propiedades agregadas (metodos)
//----------------------------------------------------------------
BinarySearchTree.prototype.insert = function (value) {
    if (value < this.value){ //si el valor a ingresar es menor que el valor que ya poseo 
        if(!this.left){     // y a la izquierda no hay nada
            this.left = new BinarySearchTree(value); //agrego el modulo a la izquierda
        }else { 
            this.left.insert(value)     // a left le aplicamos la recurcion  (insert)
        }    
    }else {
        if (!this.right){
            this.right = new BinarySearchTree(value);
        }else {
            this.right.insert(value);
        }
    }
}

//----------------------------------------------------------------
BinarySearchTree.prototype.contains = function (target) {
    if (target === this.value) return true;
    if (target < this.value){
        if (!this.left) return false;
        return this.left.contains(target);
    }
    if (!this.right) return false;
    return this.right.contains(target);
}

//----------------------------------------------------------------
BinarySearchTree.prototype.depthFirstForEach = function (cb,order) {
    //cb = funcion callbacks = function(valor){testArr.push(valor)}
    if(order === "in-order" || order === undefined){
        if(this.left) this.left.depthFirstForEach(cb,order);
        cb(this.value);        
        if(this.right) this.left.depthFirstForEach(cb,order);
    }else if (order === "pre-order"){
        cb(this.value);        
        if(this.left) this.left.depthFirstForEach(cb,order);
        if(this.right) this.left.depthFirstForEach(cb,order);
    }else if (order === "pos-order"){
        if(this.left) this.left.depthFirstForEach(cb,order);
        if(this.right) this.left.depthFirstForEach(cb,order);
        cb(this.value);        
    }
}
//----------------------------------------------------------------

BinarySearchTree.prototype.breadthFirstForEach = function () {

}

//----------------------------------------------------------------
BinarySearchTree.prototype.size = function () {    
    if (!this.left && !this.right) return 1;    
    if (this.left && this.right) return 1 + this.left.size() + this.right.size(); 
    
    if (this.left) return 1 + this.left.size();  //me retorno yo mas lo que tenga izquierda    
    if (this.right) return 1 + this.right.size();  //me retorno yo mas lo que tenga derecha
    
}
//----------------------------------------------------------------


let tree = new BinarySearchTree(20);
tree.insert(15);
tree.insert(7);
console.log(tree);
console.log(tree.value);
console.log(tree.left.value);
console.log(tree.size());
console.log(tree.contains(15));
