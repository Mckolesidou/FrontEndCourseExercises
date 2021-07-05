const fibonacci = function(num) {
    if (num<0){
      return "OOPS";
    }
    if(num==1){
      return 1;
    }
    let n0=0;
    let n1=1;
    let fibo=0;
    for (let i=1; i<num;i++){
      fibo=n0+n1;
      n0=n1;
      n1=fibo;
    }
    return fibo;
  }

module.exports = fibonacci
