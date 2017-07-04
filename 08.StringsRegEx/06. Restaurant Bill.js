function restaurantBill(arr) {
    let items = [];
    let totalBill = 0;

    for (let i in arr){
        if (i % 2 == 0){
            items.push(arr[i]);
        }
        else
        totalBill += Number(arr[i]);
    }
    console.log(`You purchased ${items.join(', ')} for a total sum of ${Number(totalBill)}`);
}
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);