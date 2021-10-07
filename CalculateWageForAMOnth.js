function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            return empHrs
            break;
        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            return empHrs
            break;
        default:
            return 0;
    }
}
let empHrs = 0;
let IS_PART_TIME =1;
let IS_FULL_TIME =2;
let PART_TIME_HOURS = 4;
let FULL_TIME_HOURS = 8;
let  Wage_PER_HOURS =20;
//Use case 4
const NUMBER_OF_WORKING_DAYS = 20;
let empHrs=0;
for(let day=0;day<NUMBER_OF_WORKING_DAYS;day++){
	let empCheck = Math.floor(Math.random()*10)%3;	
     	empHrs+=getWorkingHours(empCheck);
}
let empWage = empHrs*Wage_PER_HOURS;
console.log("Total Hrs:"+empHrs+" Emp Wage: "+empWage);


