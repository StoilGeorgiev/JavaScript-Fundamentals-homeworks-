function rotateArr(arr) {
    let rotationCount = Number(arr.pop());
    for (let i = 0; i < rotationCount; i++) {
       let lastElement = arr.pop();
       arr.unshift(lastElement);
    }
    console.log(arr.join(' '));
}
rotateArr([1,2,3,4,2]);