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


//use case 6
function calcDailyWage(empHrs){
    return empHrs*Wage_PER_HOURS;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS =20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<=NUMBER_OF_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs+=getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6-Total Days:"+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage)
console.log("Array: "+empDailyWageArr);

let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A-Total Days:"+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" EMp Wage: "+totalEmpWage)
function totalEmpWage(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A -EMP Wage with reduce:"+empDailyWageArr.reduce(totalWage,0));

//USE CASE 7B

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B-Daily Wage map:");
console.log(mapDayWithWageArr)

//USE CASE 7C SHOW DAYS WHEN FULL TIME WAGE OF 160 were earned
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C-Daily Wage Filter Fulltime Wage Earned");
console.log(fullDayWageArr);


//USE CASE 7D-Find the first occurence when Full time Wage was earned using fing function 

function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7D-First time fulltime wage was earned on Day:"+mapDayWithWageArr.find(findFulltimeWage));

//UC 7E-check idf every elements of full time wage is truely holding full time wage
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E Check All Element have Full Time Wage:"+fullDayWageArr.every(isAllFulltimeWage))

//UC 7F -Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F -check is Any Part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the Employee Workded
function totalDaysWorked(numOfDays,dailyWage) {
    if(dailyWage>0){
        return numOfDays+1
    }
    return numOfDays;
}
console.log("UC 7G -Number of days EMp Workded: "+empDailyWageArr.reduce(totalDaysWorked,0))
