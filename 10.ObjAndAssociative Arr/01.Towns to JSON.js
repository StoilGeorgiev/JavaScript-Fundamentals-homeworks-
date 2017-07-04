function townToJSON(townData) {
    let arrTowns = [];
    for (let town of townData.slice(1)){
        let[alldata,townName,townLat,townLng]=town.split(/\s*\|\s*/);
        let townObj = {Name:townName,Latitude:Number(townLat),Longitude:Number(townLng)};
        arrTowns.push(townObj);
    }
    console.log(JSON.stringify(arrTowns));
}

townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);