/**
 * Created by Stoil Georgiev on 26-May-17.
 */
function biggerOfThree([num1,num2,num3]) {
    if(num1 > num2){
        if(num1 >= num3){
            console.log(num1);
        }
        else console.log(num3);
    }
    if (num1 < num2){
        if(num2 => num3){
            console.log(num2);
        }
        else console.log(num3)
    }
    if(num1 == num2 && num2 == num3){
        console.log(num1)
    }
}