/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function printKT(arr) {
    let k = arr.shift();
    console.log(arr.slice(0,k).join(' '));
    console.log(arr.slice(arr.length-k,arr.length).join(' '));
}
printKT([3, 6, 7, 8, 9]);