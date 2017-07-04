/**
 * Created by Stoil Georgiev on 29-May-17.
 */
function templateFormat(arr) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for(let i = 0; i < arr.length; i +=2){
        let question = arr[i];
        let answer = arr[i + 1];

        printer(question,answer);
    }
    console.log("</quiz>");

    function printer(question, answer) {
        console.log('   <question>');
        console.log(`       ${question}`);
        console.log('   </question>');
        console.log('   <answer>');
        console.log(`       ${answer}`);
        console.log('   </answer>');
    }
}
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);