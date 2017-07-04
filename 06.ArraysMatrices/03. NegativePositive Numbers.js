/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function rearange(arr) {
    let result =[];
    for (let i in arr){
        if(arr[i] < 0){
            result.unshift(arr[i]);
        }
        else
            result.push(arr[i]);
    }
    console.log(result.join('\n'));
}
rearange([7, -2, 8, 9]);