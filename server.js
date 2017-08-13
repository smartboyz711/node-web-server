const express = require('express');

var app = express();

app.use(express.static(__dirname +'/public'));

app.get('/',(req,res)=>{
    //res.send('<h1>hello Express!</h1>');
    res.send({
        name : 'tonz',
        like : [
            'Biking',
            'Cities'
        ]
    })
});

app.get('/about',(req,res) => {
    res.send('about page');
});

app.get('/bad',(req,res) => {
    res.send({
        errorMassage : 'Unable to handle request'
    });
});
app.listen(3000,()=>{
    console.log('Server is up op port 3000');
});

