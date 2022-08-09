function printRight(n){
  for (count= 1; count <= n; count++) {
    console.log(" ".repeat(n-count) + "*".repeat(count));
  }
}

printRight(9);
