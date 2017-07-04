/**
 * Created by Stoil Georgiev on 02-Jun-17.
 */
function modifyAverage(num) {
     let numAsString = num.toString();
     let sum = sumofNumbers(numAsString);
     while (sum / numAsString.length <= 5){
         numAsString+= '9';
         sum = sumofNumbers(numAsString);
     }

    console.log(numAsString);

    function sumofNumbers(x) {
        let sum = 0;
        for (let i of x){
            sum += Number(i);
        }
        return sum;
    }
}
modifyAverage(1434);