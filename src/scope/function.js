//En una función asignar un valor y llamarlo
const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits();
// console.log(fruit); se da error porque esta definidio de forma local


const anotherFunction = () => {
    var x = 1;
    var x = 2; //Var si asigna un nuevo valor, por eso se debe dejar de usar esta variable para no reescribir nada
    let y = 1;
    // let y = 2; no se puede reasignar el valor de let y const
    console.log(x);
    console.log(y);
}

anotherFunction();