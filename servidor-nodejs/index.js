let express = require('express');
let cors = require('cors')
const fs = require('fs')
let app = express();

const host = 'localhost';
const port = '3001';

// http://localhost:3001/hello

app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

app.get('/hello', (request, response) => {
    // response.send('<h1> Hello World!</h1>');
});

app.get('/cliente', (request, response) => {
    // response.send('<h1> Hello World!</h1>');
    console.log(request.query)
    fs.writeFileSync('teste.json', JSON.stringify(request.query))

    response.redirect('http://localhost:5500?sucesso');
});

app.post('/cliente', (request, response) => {
    console.log("Dados: ", request.body)
    fs.writeFileSync('teste.json', JSON.stringify(request.body))
    response.status(200).json({status: 'Dados cadastrados'})

    // response.status(200).send(new Date());

    // response.redirect('http://localhost:5500');
});

app.listen(port, host, function() {
    console.log(`Servidor em execução http://${host}:${port}`)
});