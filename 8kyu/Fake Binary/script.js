function fakeBin(x){
    let bin = ''
    for (const chat of x) {
      if (parseInt(chat) < 5) {
        bin += '0';
      } else {
        bin += '1';
      }
      
    }
   return bin
  }