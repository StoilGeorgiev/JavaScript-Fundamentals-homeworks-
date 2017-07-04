/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function findDistance([V1,V2,T]) {
    let V1metric = (V1*1000)/3600;
    let V2metric = (V2*1000)/3600;
    let distance1 = V1metric*T;
    let distance2 = V2metric*T;

    let totalDistance = Math.abs(distance1 - distance2);
    console.log(totalDistance);
}