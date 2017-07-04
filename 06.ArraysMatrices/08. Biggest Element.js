/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function findBiggest(arr) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    arr.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}