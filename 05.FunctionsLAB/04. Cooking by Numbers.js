/**
 * Created by Stoil Georgiev on 29-May-17.
 */
function numberCooker(arr) {
    let num = Number(arr[0]);

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => x + 1;
    let bake = x => x * 3;
    let filler = x => x * 0.8;

    for (let i = 1; i <= 6; i++){
        switch(arr[i]){
            case 'chop' :
                num = chop(num);
            console.log(num);
            break;
            case 'dice':
                num = dice(num);
            console.log(num);
            break;
            case 'spice':
                num = spice(num);
            console.log(num);
            break;
            case 'bake':
                num = bake(num);
            console.log(num);
            break;
            case 'fillet':
                num = filler(num);
            console.log(num);
            break;
        }
    }
}
numberCooker([9, 'dice', 'spice', 'chop','bake', 'fillet']);
