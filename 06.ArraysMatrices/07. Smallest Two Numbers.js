/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function smallestTwo(arr) {
    arr.sort((a, b) => a-b);
    let result = arr.slice(0, 2);
    return result.join(' ');
}
smallestTwo([30, 15, 50, 5]);
