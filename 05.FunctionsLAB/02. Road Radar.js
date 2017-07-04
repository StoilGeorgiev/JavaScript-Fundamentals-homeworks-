/**
 * Created by Stoil Georgiev on 29-May-17.
 */
function roadRadar(arr) {
    let[speed,zone] = arr;
    let maxSpeed = 0;

    switch (zone){
        case "city" : maxSpeed = 50; break;
        case "residential" : maxSpeed = 20; break;
        case "interstate" : maxSpeed = 90; break;
        case "motorway" : maxSpeed = 130; break;
    }

    let overspeed = speed - maxSpeed;
    if (overspeed <= 0){
        console.log('');
    }
    else if (overspeed <= 20){
        console.log('speeding')
    }
    else if (overspeed <= 40){
        console.log('excessive speeding');
    }
    else if (overspeed > 40 ){
        console.log('reckless driving');
    }

}
roadRadar([40, 'city']);
roadRadar([200, 'motorway']);
roadRadar([120, 'interstate']);
roadRadar([40, 'city']);