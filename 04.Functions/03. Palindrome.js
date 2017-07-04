/**
 * Created by Stoil Georgiev on 27-May-17.
 */
function isPalindrome(str) {
    for (let i=0; i<str.length/2; i++)
        if (str[i] != str[str.length-i-1]){
            console.log('false')
        }
    console.log('true');
}
isPalindrome("abccvvcvcvba");