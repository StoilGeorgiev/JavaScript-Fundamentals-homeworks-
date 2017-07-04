/**
 * Created by Stoil Georgiev on 23-May-17.
 */
function sumVAT(input) {
    let sum = 0;
    for(let num of input){
        sum += num;
    }
    console.log("sum = " + sum);
    console.log("VAT= " + sum * 0.20);
    console.log("total = " + sum * 1.2);
}
sumVAT([1.20, 2.60, 3.50]);