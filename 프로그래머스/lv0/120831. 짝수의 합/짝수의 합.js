const solution = (n) => {
  let sum = Number();
  for (let i = 0; i <= n; i++) {
    if ((i % 2) === 0) {
      sum += i
    }
  }
  return sum
}