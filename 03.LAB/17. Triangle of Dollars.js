/**
 * Created by Stoil Georgiev on 26-May-17.
 */
function dollarTriagle(n) {
    if(0 < n && n <= 100){
        for(let i = 1; i <= n; i++){
            console.log('$'.repeat(i));
        }
    }
    else
        console.log("Enter value between 0 and 100.")
}
dollarTriagle(150);