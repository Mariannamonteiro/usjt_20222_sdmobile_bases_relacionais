const express = require ('express')
const app = express()
app.use(express.json())
const porta = 3000

const {Client} = require ('pg')
const client = new Client({
    user: '',
    host: 'motty.db.elephantsql.com',
    database: '',
    password: '',
    port:'5432'


})
teste = async() =>{
    await client.connect()
    console.log("foi")
}


teste()


















app.listen(porta, () => console.log(`Executando. Porta ${porta}`))