function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEMpHrs = 0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
let IS_PART_TIME=1;
let IS_FULL_TIME =2;
const WAGE_PER_HOUR = 20;
function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {
        case IS_PART_TIME:
            console.log("Employee works Part Time");
            break;
        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            break;

        default:
            console.log("Employee is ABSENT");
            break;
    }
}
while(totalEMpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEMpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage = calcDailyWage(totalEMpHrs);
console.log("UC6-TOTAL DAYS: "+totalWorkingDays+"Total Hrs: "+totalEMpHrs+" EMP_WAGE: "+empWage)