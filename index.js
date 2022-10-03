
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

const canSum = (targetSum, numbers) => {}