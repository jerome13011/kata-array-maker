function arrayMaker(max) {
  if (isNaN(max)) {
    return null;
  } else if (max === 0) {
    return [];

  } else {
    var tableau = [];
    for (var i = 1; i <= max; i++) {
      tableau.push(i);
    }
    return tableau;
  }
}
