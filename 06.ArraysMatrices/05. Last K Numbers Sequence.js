/**
 * Created by Stoil Georgiev on 01-Jun-17.
 */
function calcSequens(n,k) {
    let sequence = [1];
    let seq = [1];
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let end = current - 1;
        let sum =
            seq[current] = sum;
    }
    console.log(seq.join(' '));
}
calcSequens(6,3);