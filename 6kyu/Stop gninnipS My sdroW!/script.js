function spinWords(string){
    return string.split(' ').map(word=>(word.length>=5)?revrs(word):word).join(' ');
  }
  function revrs(string){
    return (string.split('').reverse().join(''));
  }