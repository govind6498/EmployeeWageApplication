const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let IS_PART_TIME = 1;
let IS_FULL_TIME =2;
let empHrs = 0;
let totalHrs=0
let WAGE_PER_HOUR = 20;
let PART_TIME_HOURS = 4;
let FULL_TIME_HOURS = 8;
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
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}
console.log(empDailyWageMap);

function totalWage(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC 8A-EMP WAGE Map totalHrs:"+Array.from(empDailyWageMap.values()).reduce(totalWage,0));














