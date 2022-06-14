

/* Simple Checkout Kata

-Take in array of items A,B,C
-Return price


*/






console.log('hello')



function checkoout(items){

    let occurance = { }

    //find the occurance of items
    for(const item of items){
        //if item not in occurance
        if(!(item in occurance)){
            occurance[item] = 1
        }else{
            occurance[item] ++
        }
    }
    console.log(occurance.C)
    let aTotal = naNtoZero((occurance.A * 50)/100)
    let bTotal = 0
    let cTotal = naNtoZero((occurance.C * 25)/100)
    
    //if item B divisible by 2
    if(occurance.B % 2 === 0){
        bTotal = occurance.B * 0.625
    }
    
    //if item C divisible by 3
    if(occurance.C % 3 === 0) {
        console.log("free item C")
    }

    const total = parseFloat(aTotal + bTotal + cTotal).toFixed(2)

    console.log(total)
}


function naNtoZero(val){
    if(isNaN(val)){
        return 0
    }else{
        return val
    }
}

checkoout(['C', 'C', 'C'])