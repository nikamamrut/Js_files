function pascalTriangle(n) {
    const triangle = [];
  
    for (let i = 0; i < n; i++) {
      const row = [];
  
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row.push(1);
        } else {
          row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
      }
  
      triangle.push(row);
    }
  
    return triangle;
  }
  
  const n = 5;
  const triangle = pascalTriangle(n);
  
  for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i].join(" "));
  }
  