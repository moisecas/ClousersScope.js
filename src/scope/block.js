const fruits = () => {
    //generar un bloque con variables
    if (true){
        var fruits1 = "apple";
        let fruits2="banana";
        const fruits3="ñapi"; //con let y const solo podemos acceder en este bloque
        console.log(fruits3);
        console.log(fruits2); //hay que acceder a los elementos en el ambito donde se encuentran 
    }
    //acceder a ellas
    console.log(fruits1);

    
}
fruits(); //invoco la función y uso la ext run code para correr el bloque de cod que escoja o selecciones


//otro ejemplo  

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x); 
//si asignamos las variables con var se reemplaza el valor de la variable en el resultado, se traslada el valor 
