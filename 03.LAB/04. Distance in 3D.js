/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function distance3D([a,b,c,x,y,z]) {
    let distance = Math.sqrt(Math.pow(a-x,2) + Math.pow(b-y,2) + Math.pow(c-z,2));
    console.log(distance);
}