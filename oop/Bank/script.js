class Bank {
    Fname;
    Lname;
    pass;
    #balance
    constructor(Fname,Lname,pass,balance){
        this.Fname = Fname;
        this.Lname = Lname;
        this.pass = pass;
        this.#balance = balance;
    }
    get balance () {
        if (this.pass == "abc"){
            return this.#balance
        }
    }

    set (balance){
        this.#balance=balance
    }
}

let acc = new Bank ("ANIL","ASHOK","ablc","2,50,525")

console.log(acc.pass);