const express = require('express')
const dotenv = require('dotenv')
const db = require('./config/db.js')
const { users } = require('./router/index.js')

dotenv.config()

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.json({
//         status: 200,
//         message: 'API Run'
//     })
// })

app.use('/api', users);

db.connect((err) => {
    if (err) return console.log(err)
    console.log('DB Connected ')
})

app.listen(process.env.PORT, () => {
    console.log(`Server run ${process.env.PORT}`)
})