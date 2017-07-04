function spliter(string, delimeter) {
    let emelent = string.split(delimeter);
    for (let line of emelent){
        console.log(line);
    }
}
spliter('One-Two-Three-Four-Five','-')

