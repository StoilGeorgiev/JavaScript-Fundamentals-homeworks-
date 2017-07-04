function printer(arr) {
    let num = Number(arr.pop());
    let result = [];
    for (let i = 0; i < arr.length; i += num){
        result.push(arr[i]);
    }
    console.log(result.join('\n'));
}
printer(['dsa','asd','test','tset',2]);