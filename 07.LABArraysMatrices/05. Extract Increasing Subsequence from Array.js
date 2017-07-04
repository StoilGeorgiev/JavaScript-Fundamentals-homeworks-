function filterSubseq(arr) {
    let result = [];
       result = arr.filter((num,i,arr) => num[i] < num[i+1]);
        console.log(result);
}
filterSubseq([1,3,8,5,10,12,3,2,24]);