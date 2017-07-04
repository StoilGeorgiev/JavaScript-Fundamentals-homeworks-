/**
 * Created by Stoil Georgiev on 27-May-17.
 */
function getLastDay(arr) {
    let [day, month,year] = arr;
    let date = new Date(year, month-1,0);
    return date.getDate();
}
getLastDay([17, 3, 2002]);