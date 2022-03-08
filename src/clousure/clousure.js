//recuerda el ambito donde ha sido creado 
//alcancia 

const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins; 
    console.log(`MoneyBox: $${saveCoins}`);  

}
moneyBox(5);
moneyBox(10); 

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
myMoneyBox(6); //out 10, va guardando y agregando el anterior 
