const buildCount = () => {
    let count = 1; 
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount; 
}; 

const myCount = buildCount(1);
myCount();
myCount();
myCount(); 

 