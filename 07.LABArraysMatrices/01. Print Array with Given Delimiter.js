/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function printArr(arr) {
    let seperator = arr.pop();
    console.log(arr.join(seperator));
}
printArr(['One','Two','Three','-']);