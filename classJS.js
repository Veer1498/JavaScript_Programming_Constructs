/**
 * Can you create Employee Payroll Data
with id, name and
salary
Create all methods and functions also
getter setter and constructor should also be there
 */
class Employee{
    id;
    name;
    salary;
    constructor (id,name,salary){
        this.id = id
        this.name = name
        this.salary = salary
    }
    set setId( id){
        id = this.id
    }
    get getId(){
        return this.id
    }
    set setName(name){
        name = this.name
    }
    get getName(){
        return this.name
    }
    set setSalary(salary){
        salary = this.salary
    }
    get getSalary(){
        return this.salary
    }
}
    let worker1 = new Employee(1,"Veer",10000)
    let worker2 =  new Employee(2,"Priya",15000)
    console.log(worker1)
    console.log(worker2)

    worker1.setName = "Viru"
    console.log(worker1)
        
    
