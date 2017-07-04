/**
 * Created by Stoil Georgiev on 24-May-17.
 */
function leapYear(year) {
    let leap = (year % 4 == 0 && year %100 != 0)||(year % 400 == 0);
    if (leap == true){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}