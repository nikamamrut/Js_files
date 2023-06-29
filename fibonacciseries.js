function fibonacciSeries(n) {
    if (n === 0) {
      return [];
    }
    if (n === 1) {
      return [0];
    }
    const series = [0, 1];
    while (series[series.length - 1] < n) {
      const nextNumber = series[series.length - 1] + series[series.length - 2];
      if (nextNumber > n) {
        break;
      }
      series.push(nextNumber);
    }
    return series;
  }
  
  const N = 100;
  const series = fibonacciSeries(N);
  console.log(`Fibonacci series up to ${N}: ${series.join(', ')}`);
  