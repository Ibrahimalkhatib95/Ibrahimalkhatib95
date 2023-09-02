const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
const arrOfUNum = [];
let Bprime = true;

for (let index = 0; index < arrOfNum.length; index++) {
    Bprime = true;
     for (let index1 = 0; index1 < arrOfUNum.length; index1++) {
        if (arrOfNum[index] == arrOfUNum[index1] ) {
            Bprime = false;
            break;
    
        } 
        
     }
    if (Bprime) {
        arrOfUNum[arrOfUNum.length] = arrOfNum[index];
        
    }
}
console.log(arrOfUNum);
