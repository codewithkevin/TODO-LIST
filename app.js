const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Variables
let items = [];


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

app.set("view engine", "ejs");


app.get('/', (req, res) => {


    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };
    
    
    let day = today.toLocaleDateString('en-US', options);
    let time = today.toLocaleTimeString();
    

    res.render("list",
     { kidofDay: day,
        newlistItems:items,
        timeofDay: time,
     });
        

});

app.post('/', (req, res) => {
    item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});