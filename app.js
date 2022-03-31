const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    var today = new Date();
    // var time = today.getTime();
    var currentTime = today.toLocaleString();

    if(today.getDate() === 6 || today.getDate() === 0){
        res.write('<h1>Weekend</h1>' + currentTime );
    
    }else{
        res.write('<h1>Weekday</h1>' + currentTime );
        res.send();
    } 

});







app.listen(3000, () => {
    console.log('Server is running on port 3000');
});