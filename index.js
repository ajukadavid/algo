
//FIBONACCI


// const fib  = (n, memo = {}) => {
//   if (n in memo) return memo[n]
//   if (n <= 2) return 1;
//   memo[n] = fib (n - 1, memo) + fib(n - 2, memo);
//   console.log(memo)
//   return memo[n]
// }

// console.log(fib(6)) 


//Grid Traveller

// const gridTraveller = (m, n, memo = {}) => {
//   const key = m + ',' + n
//   if (key in memo) return memo[key]
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;
//   memo[key]  = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo)
//   return memo[key]

// }
// console.log(gridTraveller(4,3))

//FACTORIAL WITH MEMOIZATION

// const factorial = (m, memo = {}) => {
//   if (m in memo) return memo[m]
//   if (m === 1) return 1;
//   memo[m] = m * factorial(m - 1, memo)
//   return memo[m]

// }

// console.log(factorial(3))

//CanSum: check if combination of numbers in array can supup to target number without remainder --> Descision problem

// const canSum = (targetSum, numbers, memo = {}) => {
//   if(targetSum in memo) return memo[targetSum]
//   if(targetSum === 0) return true
//   if(targetSum < 0) return false

//   for(let num of numbers){
//     const remainder = targetSum - num
//     if(canSum(remainder, numbers) === true){
//       memo[targetSum] = true
//       return true
//     }
//   }
//   memo[targetSum] = false
//   return false

// }

// console.log(canSum(7, [3, 4]))


//howSum: similar to canSum but returns the array possible number of combinations or return null if no combination in array can match targetsum --> Combinatoric problem

// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return []
//   if (targetSum < 0) return null

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderResult = howSum(remainder, numbers, memo)
//     if (remainderResult !== null) {
//       memo[targetSum] = [...remainderResult, num]
//       return memo[targetSum]
//     }
//   }
//   memo[targetSum] = null
//   return null
// }

// console.log(howSum(700, [2, 3, 9]))

//best sum: optimization problem, check the best possible combination of numbers to genarate the targetSum

// const bestSum = (targetSum, numbers, memo={}) => {
//   if (targetSum in memo) return memo[targetSum]
//   if (targetSum === 0) return [];
//   if(targetSum  < 0) return null;

//   let shortestCombination = null
  
//   for(let num of numbers){
//     const remainder = targetSum - num
//    const remainderCombination = bestSum(remainder,numbers, memo);
//     if(remainderCombination !== null){
//       const combination = [...remainderCombination, num]
//       //if the combination is shorter than the current "shortest", update it
//       if(shortestCombination === null || combination.length < shortestCombination.length){
//         shortestCombination = combination
//       }
//     }
//   }

//   memo[targetSum] = shortestCombination
//   return shortestCombination
// }

// console.log(bestSum(900, [50, 3, 4, 7]))

// const canConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target]
//   if(target === '') return true

//   for(let word of wordBank) {
//     if(target.indexOf(word) === 0){
//       const suffix = target.slice(word.length)
//      if(canConstruct(suffix, wordBank, memo) === true){
//        memo[target] = true
//        return true
//      }
//     }
//   }
//   memo[target] = false
//   return false
// }

// console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))

const countConstruct = (target, wordBank) => {
  if(target = '') return 1;

  let totalCount = 0;

  for(let word of wordBank) {
    if target.indexOf(word === 0) { //check if word is a prefix
    const numWaysForRest =   countConstruct(target.slice(word.length), wordBank) //pass in everything else after the prefix
      totalCount +=
    }
  }
}