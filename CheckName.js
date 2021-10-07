class EmployeePayrollData{
    id;
    salary;
    gender;
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
    get name(){
        return this._name;
    }
    set name(name){
       let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
       if(nameRegex.test(name))
            this._name = name;
       else throw "Name is InCorrect";
    
    }

    //method
    toString(){
        const option =  {year:"numeric",month:'long',day:"numeric"};
        const empDate = this.startDate===undefined?"undefined":
                        this.startDate.toLocaleDateString("en-US",option);
        return "Id="+this.id+" name= "+this.name+" salary="+this.salary+" gender="+this.gender+" StartDate="+empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1,"Govind",1525856);
console.log(employeePayrollData)
employeePayrollData.id = 0;
try{
    employeePayrollData.name = "ohn";
    // console.log(employeePayrollData.toString())
}
catch(e){
    console.error(e)
}
console.log(employeePayrollData)
// let employeePayrollData1 = new EmployeePayrollData(1,"Terrisa",30000,"F",new Date())
// console.log(employeePayrollData1)