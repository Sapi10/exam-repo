const express = require('express')
const cors = require('cors')
const mysql = require ('mysql')

const app = express()

const appforbooks = express(Router)


const port = 4000


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'manager',
  database: 'mybooks'
})

connection.connect()
connection.query(query, (error, result)=>{
    if(error==null)
    {
        var data = JSON.stringify(result) 
        response.setHeader("Content-Type","application/json");
        response.write(data);
    } 
    else
    {
        console.log(error);
        response.setHeader("Content-Type","application/json");
        response.write(error)
    }
    response.end();
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})

connection.end()


app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})