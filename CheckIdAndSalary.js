class EmployeePayrollData{
    // id;
    // salary;
    // gender;
    startDate;

    //constructor
    constructor(...params){
        this.id = params[0]
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    //getter and setter method
    get id(){
        return this._id
    }
    set id(id){
        let idRegex = RegExp('^[1-9]{1}[0-9]*$')
        if(idRegex.test(id))
            this._id = this.id;
        else throw "ID is Negative"
    }
    get salary(){
        return this._salary
    }
    set salary(salary){
        let salaryRegex = RegExp('^[1-9]{1}[0-9]*$')
        if(salaryRegex.test(salary))
            this._salary = this.salary;
        else throw "Salary is Negative"
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
       let genderRegex = RegExp("^[M]?[F]?$");
       if(genderRegex.test(gender)) 
            this._gender = gender;
       else throw "gender is InCorrect";
    
    }

    //method
    toString(){
        const option =  {year:"numeric",month:'long',day:"numeric"};
        const empDate = this.startDate===undefined?"undefined":
                        this.startDate.toLocaleDateString("en-US",option);
        return "Id="+this.id+" name= "+this.name+" salary="+this.salary+" gender="+this.gender+" StartDate="+empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Govind",1525856,"M");
console.log(employeePayrollData)
try{
    employeePayrollData.id = -102;
}
catch(e){
    console.error(e)
}
try{
    employeePayrollData.salary = 122002;
}
catch(e){
    console.error(e)
}
try{
    employeePayrollData.gender = "F";
    console.log(employeePayrollData.toString())
} 
catch(e){
    console.error(e)
}
// console.log(employeePayrollData)