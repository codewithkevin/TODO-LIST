const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    console.log(options);

    res.render("list",
     { kidofDay: day,
     });
        

});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});