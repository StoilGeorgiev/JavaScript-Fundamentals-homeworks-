function matchEmail(email) {
    let regEx = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/gi;
    let result = regEx.test(email);
     if (result){
         console.log('Valid');
     }
     else{
         console.log('Invalid');
     }

}
matchEmail('valid123@email.bg');
