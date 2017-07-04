function funnyMath(arr) {
    let numbers = [];
    let lastTwoNums = [];
    let result = 0;
    for (let i = 0; i <= arr.length-1; i++) {
        if(arr[i] === Number(arr[i])) {
            numbers.push(arr[i]);
        }
        else {
            if(numbers.length < 2){
                console.log('Error: not enough operands!');
                return;
            }
            lastTwoNums = numbers.splice(-2);
            result = operation(lastTwoNums[0],lastTwoNums[1],arr[i]);
            numbers.push(result);
            result = 0;
        }
    }

    if(numbers.length > 1){
        console.log('Error: too many operands!');
    }
    else{
        console.log(Number(numbers[0]));
    }


    function operation(a, b, symbol) {
        let result = 0;
        switch (symbol) {
            case "+" :
                result = a + b;
                return result;
                break;
            case "-" :
                result = a - b;
                return result;
                break;
            case "/" :
                result = a / b;
                return result;
                break;
            case "*" :
                result = a * b;
                return result;
                break;
        }
    }
}
funnyMath([7,
    '-']
);
