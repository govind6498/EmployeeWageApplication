const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let empDailyHrsWageArr = new Array();
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
    empDailyHrsMap.set(totalWorkingDays,empHrs)
    empDailyHrsWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage:calcDailyWage(empHrs),
        toString(){
            return "\n Day:"+this.dayNum+"=> Working Hours is:"+this.dailyHours+" And Wage Earned = "+this.dailyWage;
        }
    })
}
// console.log("UC 10 Showing daily Hours and Wage Earned: "+empDailyHrsWageArr);
//USE CASE 11 A

let totalWages = empDailyHrsWageArr
                .filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage>0)
                .reduce((totalWage,dailyHrsAndWage)=>totalWage+=dailyHrsAndWage.dailyWage,0);

let totalHours = empDailyHrsWageArr.
                filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours>0)
                .reduce((totalHours,dailyHrsAndWage)=>totalHours+=dailyHrsAndWage.dailyHours,0);

console.log("UC 11A Total Hours: "+totalHours+" Total Wages: "+totalWages)

// process.stdout.write("UC 11 B Logging Full Work days:");
// empDailyHrsWageArr.filter(dailyHrsAndWage=>dailyHrsAndWage.dailyWage==8)
//                 .forEach(dailyHrsAndWage=>process.stdout.write(dailyHrsAndWage.toString));
// console.log(fullWorkingDays)

let fullWorkingdayStrArr = empDailyHrsWageArr
                            .filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==8)
                            .map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log("UC 11C partWokringDayString: "+fullWorkingdayStrArr)

let partWorkingdayStrArr = empDailyHrsWageArr
                            .filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==4)
                            .map(dailyHrsAndWage=>dailyHrsAndWage.toString());
console.log("UC 11C partWokringDayString: "+partWorkingdayStrArr)


let nonWorkingDayNums = empDailyHrsWageArr
                            .filter(dailyHrsAndWage=>dailyHrsAndWage.dailyHours==0)
                            .map(dailyHrsAndWage=>dailyHrsAndWage.dayNum);
console.log("UC 11C partWokringDayString: "+nonWorkingDayNums)


//USE CASE 11 D









