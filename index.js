
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

//CanSum: check if combination of numbers in array can supup to target number without remainder

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

//howSum: similar to canSum but r eturns the array possible number of combinations pr return null if no combination in array can match targetsum

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

const bestSum = (targetSum, numbers) => {
  if(targetSum === 0) return []
}