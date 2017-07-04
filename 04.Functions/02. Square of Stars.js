/**
 * Created by Stoil Georgiev on 27-May-17.
 */
function rectangleOfStars(num = 5) {
    let count = 0;
    function printStars(count) {
        console.log('* '.repeat(count));
    }
    for(let i = 1; i <= num; i++){
        printStars(num);
    }
}
rectangleOfStars(6);