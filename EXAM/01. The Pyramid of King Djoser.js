function pyramidBuilder(base, increment) {
        increment = Number(increment);
        let stone = 0;
        let marble = 0;
        let lapizLazuli = 0;
        let gold = 0;
        let floors = 1;
        let stepCouter = 1;
        let maxamount = 9007199254740991;
            for (let i = Number(base); i > 2; i -= 2) {
                if (stone < maxamount) {
                    if (stepCouter % 5 === 0) {
                        stone += Math.pow(i - 2, 2) * increment;
                        lapizLazuli += (Math.pow(i, 2) - Math.pow(i - 2, 2)) * increment;
                        stepCouter++;
                        floors++;
                    }
                    else {
                        stone += Math.pow(i - 2, 2) * increment;
                        marble += (Math.pow(i, 2) - Math.pow(i - 2, 2)) * increment;
                        stepCouter++;
                        floors++
                    }
                }
                else {
                    break;
            }
        }

        if (base % 2 === 0) {
            gold = Math.ceil(2 * 2 * increment);
        }
        else {
            gold = Math.ceil(1 * increment);
        }

        let height = Math.floor(floors * increment);

        console.log(`Stone required: ${Math.ceil(stone)}`);
        console.log(`Marble required: ${Math.ceil(marble)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(lapizLazuli)}`);
        console.log(`Gold required: ${gold}`);
        console.log(`Final pyramid height: ${height}`);

}
pyramidBuilder('11','0.2');
