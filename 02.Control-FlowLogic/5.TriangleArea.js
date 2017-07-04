/**
 * Created by Stoil Georgiev on 24-May-17.
 */
function triangleArea(a,b,c) {
    let p = (a+b+c)/2;
    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(area);
}