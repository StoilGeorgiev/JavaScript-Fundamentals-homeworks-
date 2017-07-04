function matchDate(text) {
    let regEx = /([0-9]{1,2})-([A-Z]{1}[a-z]{2})-([0-9]{4})/g;

    text.forEach()
    let[date,day,month,year] = regEx.exec(text);
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
}
matchDate(`I am born on 30-Dec-1994.
My father is born on the 9-Jul-1955.
01-July-2000 is not a valid date.
`);