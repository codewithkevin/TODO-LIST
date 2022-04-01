const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    var today = new Date();
    var currentDay = today.getDay();
    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    var day = today.toLocaleDateString('en-US', options);
    

    res.render("list",
     { kidofDay: day,
        newlist:item,
     });
        

});

app.post('/', (req, res) => {
    var item = req.body.newItem;
    res.redirect("/");
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});