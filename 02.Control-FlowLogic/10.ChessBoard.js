/**
 * Created by Stoil Georgiev on 24-May-17.
 */
function chessBoard(size) {
    let html = '<div class="chessboard">\n';
    for(let row = 0; row < size; row++){
        html += '<div>\n';
        let color= 'white';
        if(row % 2 == 0){
            color = 'black';
        }
        for(let col = 0; col < size; col++){
            html += `<span class="${color}"></span>\n`;
            if(color == 'white'){
                color = 'black';
            }
            else
                color ='white';
        }
        html += '</div>\n';
    }
    html += '</div>';
    console.log(html);
}
chessBoard(3);