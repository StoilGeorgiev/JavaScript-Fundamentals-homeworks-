/**
 * Created by Stoil Georgiev on 02-Jun-17.
 */
function findPattern(pattern,text) {
    let count = 0;
    let index = text.indexOf(pattern);
    while ( index > -1){
        count++;
        index = text.indexOf(pattern, index + 1);
    }
    console.log(count);
}
findPattern('am', 'I am a studentam');