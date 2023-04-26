class Employees {
    #salary;
    #isHired = true;
    static #allEmployees = [];
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.#salary = salary;
        Employees.#allEmployees.push(this);
        //console.log(Employees.#allEmployees)
    }
    getSalary(){
        return this.#salary;
    }
    setSalary(salary){
        this.#salary = salary;
    }
    getStatus(){
        return this.#isHired;
    }
    setStatus(status){
        if(status === "hire"){
            this.#isHired = true;
        }
        else if(status === "fire"){
            this.#isHired = false;
        }
    }
    static getEmployees(){
        //console.log(Employees.#allEmployees)
        return Employees.#allEmployees;
    } 
    static getTotalPayroll(){
        let total = 0;
        //console.log(Employees.#allEmployees.length)
        for(let i = 0; i < this.#allEmployees.length; i++){
            //console.log(employee)

            total += this.#allEmployees[i].getSalary();

         }
        return total;
        //console.log(Employees.#allEmployees[0].getSalary())
        
    }
}
// const preston = new Employees("Preston", "Engineer", 100000);
// const pr = new Employees("Pr", "Engineer", 100000);
// const pri = new Employees("Pr", "Engineer", 100000);
// // preston.getSalary(); // 100000
// // preston.setSalary(105000);
// // preston.getStatus(); // false;
// console.log(Employees.getEmployees().length); // [ Manager { }, SoftwareEngineer { }, SalesPerson { }]
// console.log(Employees.getTotalPayroll()); // 310000

module.exports = {
    Employees,
}