/**
 * Created by Stoil Georgiev on 23-May-17.
 */
function filterByAge(minAge,name1, age1, name2, age2) {
    let personA={name:name1, age:age1};
    let personB={name:name2, age:age2};
    if (personA.age >= minAge){
        console.log(personA)
    }
    if (personB.age >= minAge){
        console.log(personB)
    }
}
filterByAge(15,'Ivan',16,'Asen',9);