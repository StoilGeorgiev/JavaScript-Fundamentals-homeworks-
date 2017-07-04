/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function rounder([number,precision]) {
    let num = Number(number);
    if (precision > 15){
        let precision = 15;
        console.log(Number(num.toFixed(precision)));
    }
    else
        console.log(Number(num.toFixed(precision)));
}
rounder([4.42543432243242342344,15]);