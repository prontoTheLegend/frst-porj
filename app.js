// project 
const appPort = require('./config/main').port;
//importss
const express = require('express');
const DB = require('./config/SequelizeDB');
// const mongose = require('mongose');



// script
const app = express();




// check app run
app.get('/',(req,res,next)=>{
    res.send('ok');
});
// run app & DB connect
DB.authenticate()
.then(()=>{
    app.listen(appPort); console.log('APP IS LISTING ON ' + 'http://localhost:'+ appPort );
})
.catch(err=>{
    console.log('ERR IN SEQUELIZE DB CONNECTION')
});
