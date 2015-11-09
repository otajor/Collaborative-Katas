function doneOrNot(board){
  var result = [];
  function arrayChecker(array) {
    var orderedString = [1, 2, 3, 4, 5, 6, 7, 8, 9].toString();
    var arrayString = array.sort(function(a,b) { return a-b; }).toString();
    if(orderedString != arrayString)
      result.push(1);  
  }

  var board2 = [[],[],[],[],[],[],[],[],[]];
    for(var i = 0; i < 9; i++) {
        for(var j = 0; j < 9; j++){
            board2[i].push(board[j][i]);
        }
    }
   var longArray = board.reduce(function(a, b) { return a.concat(b); });
   var board3 = [[],[],[],[],[],[],[],[],[]];

   for(var k = 0; k < 27; k += 9) {
     board3[0].push(longArray[k], longArray[k + 1], longArray[k + 2])
   }
   for(var k = 3; k < 30; k += 9) {
     board3[1].push(longArray[k], longArray[k + 1], longArray[k + 2])
   }
   console.log(board3);
   board.forEach(arrayChecker);
   board2.forEach(arrayChecker);
   if (result.length > 0)
     return 'Try again!';
   return 'Finished!';  
}