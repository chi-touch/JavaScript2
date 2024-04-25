//testScores = [20,70,78,30,90,10,20,35,90,56]
function testHigherScore(studentScore){
    let score = 70
    let passNumbers = 0

    if(score >= studentScore){
        
        passNumbers ++;
    }

    
   return studentScore.filter(numb => numb >=70)
   

  
}

function testLowerScore(studentScore){

    let score = 70
    let failNumbers = 0;
    if(score < studentScore){
        failNumbers +=1;
    }
    return studentScore.filter(numb2 => numb2< score)
   

}

function toAddStudentScore(score){
    //let studentScore = [score.length]
    return score.map((numb) => numb +5)
}


function toGetTheSquareOfNumbers(numbers){
    return numbers.map((numb) => numb *numb)

}

function sarahBooks(members,book){
    assignedBooks = []
    for(let index = 0; index < book.length; index++){
        let distributedBooks ={}
        distributedBooks.name =members[index]
        distributedBooks.book = book[index]

        assignedBooks.push(distributedBooks)    
    }

    return assignedBooks
}



function jackTime(time){

   return time.filter((num) => num.endsWith("PM"));
    
}


function davidExpense(expenses){
       
    let total =0

    for (const key in expenses) {
        if (expenses.hasOwnProperty(key)) {
            total += expenses[key]
            console.log(`${key}: ${expenses[key]}`);
        }
    }
  return total
}


function amyShoppingList(shoppingList){
    let newList = shoppingList.filter((items) => items.isHealthy == true);
        newList.forEach(element => (element));
    
    return newList
}





// let newList = shoppingList.filter((item) => item.isHealthy == true);
//     newList.forEach(element => console.log(element));
    
//     return newList




module.exports = {testHigherScore,testLowerScore,toAddStudentScore,toGetTheSquareOfNumbers,sarahBooks,jackTime,davidExpense,amyShoppingList}




