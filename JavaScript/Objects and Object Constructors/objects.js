function Account(name,IBAN,euros) {
  this.name=name;
  this.IBAN=IBAN;
  this.euros=euros;
  console.log(name+" has created new account ");
  console.log("IBAN: "+ IBAN);
 }

const newAccount = new Account("Kostas Minaidis","GR00010003")


Account.prototype.getBalance = function() {
  if (this.euros==undefined){
    this.euros=0;
    return this.euros;
  } else {
    return this.euros;
  }
 }

Account.prototype.deposit = function (deposit){
  this.euros = this.getBalance()+deposit;
  return this.euros;
}

Account.prototype.withdraw = function (withdrawal){
  if (withdrawal<0 || typeof (withdrawal)!=="number"){
        return "Invalid amount"
  } else if (withdrawal>this.getBalance()){
    return "Error 'Insufficient balance!'"
  } else {
    this.euros = this.getBalance()-withdrawal;
    return this.euros;
  }
}
