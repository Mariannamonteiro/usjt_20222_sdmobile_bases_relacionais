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

app.get('/medicos', async(req, res) => {
    client.connect()
    const {rows} = await client.query('SELECT * FROM tb_medico')
    console.log(rows)
    res.send('ok')

})
















app.listen(porta, () => console.log(`Executando. Porta ${porta}`))