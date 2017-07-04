/**
 * Created by Stoil Georgiev on 24-May-17.
 */
function cone(r,h) {
    let volume = Math.PI*r*r*h/3;
    let s = Math.sqrt(r*r + h*h);
    let L = Math.PI*r*s;
    let B = Math.PI*r*r;
    let area = L+B;
    console.log("volume = " + volume);
    console.log("area = " + area);
}