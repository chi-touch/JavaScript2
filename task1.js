function mostOccured(number,num){
    let count =0

    for(let index = 0; index < number.length; index ++){
        for(let index2 = 1; index2< number.length; index++){

            if(number[index] == number[index2]){
                number[index] == num
            }
            count++
        }
       
        

        

    }
    console.log(count)
    return count
    

}


// function getOccurrence(array, value) {
//     var count = 0;
//     array.forEach((v) => (v === value && count++));
//     return count;
// }
module.exports = mostOccured