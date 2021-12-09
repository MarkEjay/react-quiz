const fs = require('fs');
const readFromFile = () => {

    fs.readFile('./q3.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        // let total = 0;
        // for (let i = 0; i < arr.length; i++) {
        //     total += parseInt((arr[i].split(',')[2]));
        // }
        // console.log(total);

        const arr = data.split('\n').slice(1);

        let total = 0;
        arr.forEach((val) => {
            total += parseInt(val.split(',')[2])
        })


        console.log(total);


    })
}

readFromFile()
