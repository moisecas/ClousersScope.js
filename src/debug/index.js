var a ="hola";
function saludo(){
    let b = "hola";
    const c = "todas";
    if(true){
        let d = "hola a todos todas"
        debugger //pausar mi código para saber que esta sucediendo
        //para ver esto en acción abrimos en el navegador en una pagina en blanco el inspector y pegamos el cod
    }
}
holaT(); 

const moneyBox1 = () =>{
    //asignar dentro de este ambito una variable
    var saveCoins1=0;
    //retornar esa función para que guarde los datos 
    const countCoins =(coins) => {
        saveCoins1 += coins; 
        console.log(`MoneyBox: $${saveCoins1}`);
        
    }
    return countCoins; //combinando una función con el ambito donde se declara 
}

let myMoneyBox = moneyBox1(); 
myMoneyBox(4); //out 4
myMoneyBox(4); //out 8