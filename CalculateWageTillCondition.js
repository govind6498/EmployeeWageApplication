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
const NUMBER_OF_WORKING_DAYS = 20;

//use case 5
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays =0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<=NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHours(empCheck);
}
let empWage = totalEmpHrs*Wage_PER_HOURS;
console.log("UC5-Total Days:" +totalEmpHrs+" Emp Wage: "+empWage)