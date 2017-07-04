/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function propertyAssigner(x) {
    let object = {};
    object[x[0]]= x[1];
    object[x[2]]= x[3];
    object[x[4]]= x[5];
    console.log(object);
}
propertyAssigner(['name', 'Pesho', 'age', '23', 'gender', 'male']);