function numberFinder(arr) {
    let number = [];
    let regex = /\d+/g;
    for (let string of arr){
        number.push(string.match(regex));
    }
    console.log(number.join(' '));
}
numberFinder(['123a456', '789b987', '654c321','0']);