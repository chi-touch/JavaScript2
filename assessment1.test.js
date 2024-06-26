let {testHigherScore,testLowerScore,toAddStudentScore,toGetTheSquareOfNumbers,sarahBooks,jackTime,davidExpense,amyShoppingList} = require("./assessment1.js");


test("test to get numbers higer than 70", () =>{
    let student = [20,70,78,30,90,10,20,35,90,56]
    let studentResult = testHigherScore(student)   
    
    // console.log(studentResult)
    expect(studentResult).toEqual([70,78,90,90]);
    
})

test("test to get numbers lower than 70", () =>{
    let student = [20,70,78,30,90,10,20,35,90,56]
    let studentResult1 = testLowerScore(student)
    // console.log(studentResult1)

    expect(studentResult1).toEqual([20,30,10,20,35,56])
})

test("test to add student score",() => {
    let grade = [85, 92, 78, 88, 95]
    let studentGrade = toAddStudentScore(grade)

    expect(studentGrade).toEqual([90,97,83,93,100])
})

test("test to multipy number", () =>{
    let number = [2, 4, 6, 8, 10]
    let numbersMulti = toGetTheSquareOfNumbers(number)

    expect(numbersMulti).toEqual([4,16,36,64,100])
})

test("test to assign books", () =>{
    let members = ["Emily", "Jack", "Sophia", "Daniel"]
    let book = ["diary" ,"history", "biology","chemistry"]
    let givenBooks = sarahBooks(members,book);
    expect(givenBooks).toEqual([{name: "Emily", book :"diary"},
                            {name: "Jack",book: "history"},
                            {name: "Sophia",book:"biology"},
                            {name: "Daniel", book: "chemistry"}]);
})

test("test to check jasks time",() =>{
    let time1 = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM","5:00 PM"]
    let afternoonTime = jackTime(time1)
    expect(afternoonTime).toEqual(["1:00 PM","3:00 PM","5:00 PM"])
})

test("test to check david expenses",() =>{
    let values = {"groceries": 150,
                "dining out": 100, 
                "transportation": 50, 
                "entertainment": 80}
       
    let mont = davidExpense(values)   
   
   // expect(monthly2).toBe(380)
    expect(mont).toBe(380)
})

test("test to get the healthy food",() =>{
    let shoppingList =[{ name: 'Apples', category: 'Fruits', isHealthy: true },
                       { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
                       { name: 'Carrots', category: 'Vegetables', isHealthy: true },
                       { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
                       { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
                       { name: 'Soda', category: 'Beverages', isHealthy: false }
                      ];
    let newShoppingList = amyShoppingList(shoppingList)
    
    expect(newShoppingList).toEqual([{ name: 'Apples', category: 'Fruits', isHealthy: true },
                                  { name: 'Carrots', category: 'Vegetables', isHealthy: true },
                                  { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }])
    
})

// let newList = shoppingList.filter((item) => item.isHealthy == true);
//     newList.forEach(element => console.log(element));
    
//     return newList



