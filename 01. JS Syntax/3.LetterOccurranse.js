/**
 * Created by Stoil Georgiev on 23-May-17.
 */
function countLetter(input, letter) {
    let counter = 0;
    for  (let i=0; i<input.length; i++)
        if (input[i] == letter)
            counter++;
    console.log(counter);
}
countLetter('hello','l');