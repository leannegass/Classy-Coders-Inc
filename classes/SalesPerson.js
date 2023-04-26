const { Employees } = require("./Employees");

class SalesPerson extends Employees{
    #totalSales
    constructor(name, position, salary,clients){
        super(name, position, salary)
        this.clients = clients;
        this.#totalSales = 0;
    }
    getSalesNumber(){
        return this.#totalSales;
    }
    makeSale(amount){
        this.#totalSales += amount;
    }  
}
// const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])
// malik.getSalesNumber(); // 0
// malik.makeSale(10500);
// malik.makeSale(20000);
// console.log(malik.getSalesNumber()); // 30500

module.exports = {
    SalesPerson,
}