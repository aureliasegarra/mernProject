const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
});


app.get('/number/:id', (req, res) => {
    var celsiusToFahrenheit =  require('celsius-to-fahrenheit');

    // Convert every arg
    process.argv.forEach(function (val, index, array) {
        if(index >= 2) {
            try {
                console.log(celsiusToFahrenheit(parseInt(val)));
            } catch (error) {
                console.error(error);
            }
        }
    });

    const number = req.params.id;
    const response = { number: number, Fahrenheit: celsiusToFahrenheit(parseInt(number)) ,info: 'This is the info for number '
            + number };
    res.json(response);
});

app.listen(3000, () => {
    console.log('API listening on port 3000');
});
