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

function davidExpense(){
    
}
module.exports = {testHigherScore,testLowerScore,toAddStudentScore,toGetTheSquareOfNumbers,sarahBooks}


// function addNumbers(x,y){
//     let answer = x +y;
//     return answer
// }

// function evenNumber(numbers){
//     return numbers.filter(number => number % 2 == 0);
//     //return XPathResult;
// }

// module.exports = {addNumbers,evenNumber}


// let arry = [1,3,4,5,6]
// let answer = arry.map((num) => num % 2 ==1)

// let answer2 = arry.filter(num => num %2 == 0).map(num => num * 10)
// let answer1 = arry.map((num) => num * 2)

