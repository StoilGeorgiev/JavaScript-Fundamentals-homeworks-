/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function imperialConverter(num) {
    let feet = Math.floor(num / 12);
    let inches = num % 12;

    console.log(`${feet}\'-${inches}\"`);
}
imperialConverter(11);