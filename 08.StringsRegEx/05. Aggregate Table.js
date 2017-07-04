function incomeSum(arr) {
    let sum = 0;
    let townList = [];

    for (let i of arr){
        let townInfo = i.split('| ');
        let townName = townInfo[1].trim();
        let income = Number(townInfo[2].trim());

        townList.push(townName);
        sum = sum + income;
    }
    console.log(townList.join(', ') + '\n' + sum)
}
incomeSum(['| Sofia           | 300', '| Veliko Tarnovo  | 500','| Yambol          | 275']);