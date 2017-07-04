/**
 * Created by Stoil Georgiev on 27-May-17.
 */
function triagleOfStars(num) {
    let count = 0;
    function printStars(count) {
        console.log('*'.repeat(count));
    }
    for(let i = 1; i < num; i++){
        printStars(i);
    }
    for(let i = num; i >= 1; i--){
       printStars(i);
    }
}
triagleOfStars(5);