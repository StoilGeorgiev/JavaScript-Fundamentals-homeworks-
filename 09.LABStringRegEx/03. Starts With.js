function startWith(string,substring) {
    let partstring = string.substr(0, substring.length);
    if (partstring == substring){
        console.log('true');
    }
    else
        console.log('false');
}
startWith('How have you been?','How');