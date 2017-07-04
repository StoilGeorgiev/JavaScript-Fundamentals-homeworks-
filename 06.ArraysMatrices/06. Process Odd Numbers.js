/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function transformOdd(arr) {
    let result =[];
    for(let odd in arr){
        if (odd % 2 != 0){
            result.push(arr[odd]);
        }
    }
    console.log((result.map(x=>x*2)).reverse());
}
transformOdd([3, 0, 10, 4, 7, 3]);