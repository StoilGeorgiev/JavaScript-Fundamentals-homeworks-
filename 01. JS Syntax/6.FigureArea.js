/**
 * Created by Stoil Georgiev on 23-May-17.
 */
function figureArea(w,h,W,H) {
    let bigArea = W*H;
    let smallArea = w*h;
    let commonArea = Math.min(W,w)*Math.min(h,H);
    let totalAre=bigArea+smallArea-commonArea;
    console.log(totalAre);
}
figureArea(2,4,5,3);