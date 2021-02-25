let parsed = [[3.9, "Hello", 5, -0.5], [9, -3, 15, "Babs", 0.0], [7, "Klonk", 13, 2.5], [-3, -0.9, 11.4, 37]]


function sweepData (parsedData) {
let integerCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let dotZeroArray = []
let zeroCount = [0, 0, 0, 0, 0, 0, 0 ,0 ,0, 0]
let cleanedData = new Array(parsedData.length)
for (let i = 0; i < parsedData.length; i++) {
    cleanedData[i] = new Array(parsedData[i].length)
    for (let j= 0; j < parsedData[i].length; j++){
        cleanedData[i][j] = Math.abs(parsedData[i][j])
        while (cleanedData[i][j] > 10) {
            cleanedData[i][j] = cleanedData[i][j] / 10
        }
        switch (true) {
            case Math.floor(cleanedData[i][j]) < 1:
                integerCount[0] += 1                        //<-- Slot 0 for 0-counter 
                   while (cleanedData[i][j] < 1 && cleanedData[i][j] !== 0) {
                    cleanedData[i][j] = cleanedData[i][j] * 10 
                   }
                   dotZeroArray.push(cleanedData[i][j])
                   switch(true) {   
                    case cleanedData[i][j] == 1:
                        zeroCount[1] += 1
                        break 
                    case cleanedData[i][j] == 2:
                        zeroCount[2] += 1
                        break
                    case cleanedData[i][j] == 3:
                        zeroCount[3] += 1
                        break
                    case cleanedData[i][j] == 4:
                        zeroCount[4] += 1
                        break
                    case cleanedData[i][j] == 5:
                        zeroCount[5] += 1
                        break
                    case cleanedData[i][j] == 6:
                        zeroCount[6] += 1
                        break
                    case cleanedData[i][j] == 7:
                        zeroCount[7] += 1
                        break
                    case cleanedData[i][j] == 8:
                        zeroCount[8] += 1
                        break 
                    case cleanedData[i][j] == 9:
                        zeroCount[9] += 1
                        break
                    default:
                        zeroCount[0] += 1
                        break  
                    }  
                break
            case Math.floor(cleanedData[i][j]) == 1:
                integerCount[1] += 1
                break 
            case Math.floor(cleanedData[i][j]) == 2:
                integerCount[2] += 1
                break
            case Math.floor(cleanedData[i][j]) == 3:
                integerCount[3] += 1
                break
            case Math.floor(cleanedData[i][j]) == 4:
                integerCount[4] += 1
                break
            case Math.floor(cleanedData[i][j]) == 5:
                integerCount[5] += 1
                break
            case Math.floor(cleanedData[i][j]) == 6:
                integerCount[6] += 1
                break
            case Math.floor(cleanedData[i][j]) == 7:
                integerCount[7] += 1
                break
            case Math.floor(cleanedData[i][j]) == 8:
                integerCount[8] += 1
                break 
            case Math.floor(cleanedData[i][j]) == 9:
                integerCount[9] += 1
                break
            default:
                integerCount[10] +=1   //<-- Slot 11 for all the garbage
                break 
        }
    }
} 
return {sweeped: cleanedData, zero: dotZeroArray, count: integerCount, countZero: zeroCount}
}



/* matrix.forEach(i => {
    newMatrix[i] = new Array(matrix[i].length)
     i.forEach(j => {
         newMatrix[i][j] = matrix[i][j]
    })
})*/

console.log(parsed)
console.log(sweepData(parsed).sweeped)
console.log(sweepData(parsed).zero)
console.log(sweepData(parsed).count)
console.log(sweepData(parsed).countZero)
//console.log(dotZeroArray)

/*switch(true) {   
    case cleanedData[i][j] == 1:
        zeroCount[0] += 1
        break 
    case cleanedData[i][j] == 2:
        zeroCount[1] += 1
        break
    case cleanedData[i][j] == 3:
        zeroCount[2] += 1
        break
    case cleanedData[i][j] == 4:
        zeroCount[3] += 1
        break
    case cleanedData[i][j] == 5:
        zeroCount[4] += 1
        break
    case cleanedData[i][j] == 6:
        zeroCount[5] += 1
        break
    case cleanedData[i][j] == 7:
        zeroCount[6] += 1
        break
    case cleanedData[i][j] == 8:
        zeroCount[7] += 1
        break 
    case cleanedData[i][j] == 9:
        zeroCount[8] += 1
        break
    default:
        zeroCount[9] += 1
        break  
    } */