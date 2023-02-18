function buscaMax (arr){
    let contador = 0
    var max = arr [0]
    for (var i = 0; i <= arr.length; i++){
        contador++;
        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log("contador : ", contador)
    console.log(max)
}
//o(n)


buscaMax([1,2,3,4,5,6,7,8,9,10,11,12])

function imprime (arr){
    console.log(arr);
}

imprime(1,2,3,4);
// o = 1
//----------------------------------------------------------------

function sumNum (array, num) {
    let contador = 0;
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array.length; j++){
            contador++;
            if(array[i] + array[j] === num) return true;
        }
    }
    console.log(contador)
    return false;
}

console.log(sumNum([1,2,3,4,5,6,7,8,9,10], 99))
// for => 0(n)
//for {for} => 0(n^2)
// for {for{for} => 0(n^3}