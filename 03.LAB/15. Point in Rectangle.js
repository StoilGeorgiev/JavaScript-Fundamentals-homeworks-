/**
 * Created by Stoil Georgiev on 26-May-17.
 */
function isInRectangle(input) {
    let[x,y,xMin,xMax,yMin,yMax] = input;
    if (x >=  xMin && x <= xMax && y >= yMin && y <= yMax){
        console.log("inside");
    }
    else
        console.log("outside");
}