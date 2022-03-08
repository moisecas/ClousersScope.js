const helloWorld = () => {
    const hello = "hola a todos";
    console.log(hello); 
};

helloWorld(); 

//como puedo acceder a una variable dentro de un bloque o una función 

// Scope Local : son variables de tipo let o const que son definidas dentro de un bloque osea { } y no pueden acceder desde afuera del bloque, estan no existen 

//Ambito lexico : La funcion accede sobra la variable local, y no trabaja sobre la variable global, trabaja sobre su asignacion y no reasigna la misma variable 
