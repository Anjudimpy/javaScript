function main() {
    //create your class here with the name Account with all the private properties and getter and setter
    class Account{
        #accountNumber ;
        #balance;
        constructor(accountNumber, balance ){
            this.#accountNumber = accountNumber;
            this.#balance = 0;
}
        get getbalance(){
            return this.#balance;
        }
        
        set setbalance(value) {
            if(value >= 0){
                return this.#balance = value;
            }else{
                  console.log("Please enter a positive value for the balance");
            }
        }
        
        deposit(amt){
            if(amt>0){
                this.#balance += amt;
            }else{
                console.log("Please enter a positive value for the balance");
            }
        }
        
        withdraw(amt) {
              if (amt > this.#balance) {
                console.log("Insufficient balance");
            } else if (amt < 0) {
                console.log("Please enter a valid withdrawal amount.");
            } else {
                this.#balance -= amt;
            }
        }
    }
  
    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
  }
  main();