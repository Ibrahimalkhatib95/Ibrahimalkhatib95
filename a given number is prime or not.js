
function Prime_or_not(number){
    let Bprime = true;
    for (let index = number - 1; index > 1; index--) {
        if(number % index == 0){
            console.log('The number is not prime:'+ number);
            Bprime = false;
            break;
        }    
    }
    if (Bprime) 
        console.log('The number is prime: '+ number);
}



