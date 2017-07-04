/**
 * Created by Stoil Georgiev on 25-May-17.
 */
function radToDegree(input) {
    let grads = input % 400;
    grads = grads < 0 ? 400 + grads: grads;
    let degree = 0.9 * grads;
    console.log(degree);
}
radToDegree(-50);