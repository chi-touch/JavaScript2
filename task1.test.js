let mostOccured = require("./task1.js");

test("get the most occured",()=>{
    let firstInput = [1,1,2,2,2]
    let answer= mostOccured(firstInput)

    expect(answer).toEqual([2])
})