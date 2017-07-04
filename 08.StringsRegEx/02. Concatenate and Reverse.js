/**
 * Created by Stoil Georgiev on 02-Jun-17.
 */
function combineAndReverse(arr) {
    let string = arr.join('');
    let chars = Array.from(string);
    let charRev = chars.reverse();
    console.log(charRev.join(''));
}
combineAndReverse(['I','Am','a','Student']);