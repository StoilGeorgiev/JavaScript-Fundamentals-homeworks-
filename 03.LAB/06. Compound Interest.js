/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function compoundInterest([P,i,compPeriod,t]) {
    let iFraction = i / 100;
    let n = 12/compPeriod;

    let totalValue = P * Math.pow(1 + (iFraction / n),(n * t));
    console.log(Number(totalValue.toFixed(2)));
}