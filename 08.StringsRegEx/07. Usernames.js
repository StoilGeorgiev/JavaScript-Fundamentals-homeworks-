function userNames(arr) {
    let result = [];

    for(let email of arr){
        let[user,domain] = email.split('@');
        user = user +'.';
        let domainDigit = domain.split('.');
        domainDigit.forEach(x => user += x[0]);
        result.push(user);
    }
    console.log(result.join(', '));
}
userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
