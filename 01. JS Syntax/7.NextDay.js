/**
 * Created by Stoil Georgiev on 23-May-17.
 */
function getNextDay(year,month,day) {
    let today = new Date(year, month-1,day);
    let oneDay = 24*60*60*1000;
    let nextDate = new Date(today.getTime() + oneDay);
    console.log(nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate());
}
getNextDay(2016,9,30);
