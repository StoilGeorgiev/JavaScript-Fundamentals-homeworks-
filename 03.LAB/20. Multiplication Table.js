/**
 * Created by Stoil Georgiev on 27-May-17.
 */
function multiplicationTable(num) {
    console.log('<table border=\'1\'>');
    let head = "<tr><th>x</th>";
    for (let i = 1; i <= num; i++){
        head += `<th>${i}</th>`;
    }
    head += "</tr>";
    console.log(head);
    for (let i = 1; i <= num; i++){
        let body = `<tr><th>${i}</th>`;
        for (let multiplicator = 1; multiplicator <= num; multiplicator++){
            let result = i * multiplicator;
            body += `<td>${result}</td>`;
        }
        body +="</tr>";
        console.log(body);
    }
    console.log('</table>');
}
multiplicationTable(10)