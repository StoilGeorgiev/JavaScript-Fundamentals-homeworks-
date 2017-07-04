function endWith(string,substring) {
    let partstring = string.substring((string.length - substring.length), string.length);
    if (partstring == substring){
        console.log('true');
    }
    else
        console.log('false');
}
endWith('How have you been?','been?');