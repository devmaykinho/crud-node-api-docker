const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const allowCors = require('./src/middleware/cors')

const employee = require('./src/routes/employee')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(allowCors)


app.use('/employee', employee)

app.use((req, res, next) => {
    const erro = new Error('Not Found')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)

    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app