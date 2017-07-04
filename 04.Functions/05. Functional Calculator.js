/**
 * Created by Stoil Georgiev on 29-May-17.
 */
function calculator(a,b,operator) {
    switch (operator){
        case '+': add(a,b); break;
        case  '-': subs(a,b); break
        case '*': multiply(a,b);break;
        case  '/': devide(a,b); break;
    }
    function add(a,b) {
        console.log(a + b);
    }
    function subs(a,b) {
        console.log(a - b);
    }
    function multiply(a,b) {
        console.log(a * b);
    }
    function devide(a,b) {
        console.log(a / b);
    }

}
calculator(3, 3, '/');