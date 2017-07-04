function binaryLog(arr) {
    for(let num of arr){
        let log = Math.log2(num);
        console.log(log);
    }
}
binaryLog([5,8,9,77,6,1]);