/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function getEven(arr) {
    let result = [];
    for (let num in arr){
        if (num % 2 == 0){
            result.push(arr[num]);
        }
    }
    console.log(result.join(' '));;
}
getEven([1,2,3,6,6,4,5,6,8]);