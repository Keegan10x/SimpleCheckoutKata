

/* Simple Checkout Kata

-Take in array of items A,B,C
-Return price


*/






console.log('hello')



function checkoout(items){

    let occurance = {}

    for(const item of items){
        //if item not in occurance
        if(!(item in occurance)){
            occurance[item] = 1
        }else{
            occurance[item] ++
        }
    }
    console.log(occurance)
}




checkoout(['C', 'C', 'C', 'C'])