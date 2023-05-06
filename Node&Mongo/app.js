const path = require('path');
const express = require('express');
const {mongoConnect} = require('./database/database');
const app = express();
const PORT = 4445 ;

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.json()); 

mongoConnect()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:`+PORT);
        });
    })