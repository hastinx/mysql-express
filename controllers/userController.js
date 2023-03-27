const db = require('../config/db.js')

module.exports = {
    getAll: (req, res) => {
        db.query(`SELECT * FROM users`, (err, result) => {
            if (err) return res.json({
                status: 400,
                message: err
            })

            res.json({

                status: 200,
                values: result
            })

        })
    },

    getById: (req, res) => {
        db.query(`SELECT * FROM users WHERE id=${req.params.id}`, (err, result) => {
            if (err) return res.json({
                status: 400,
                message: err
            })

            res.json({
                status: 200,
                values: result
            })

        })
    },

    addUsers: (req, res) => {
        const { username, email, password } = req.body
        console.log(username, email, password)
        db.query(`INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}')`, (err, result) => {
            if (err) return res.json({
                status: 400,
                message: err
            })

            res.json({
                status: 200,
                values: 'Data inserted successfully'
            })

        })
    },

    deleteUsers: (req, res) => {
        db.query(`DELETE FROM users WHERE id = ${req.params.id}`, (err, result) => {
            if (err) return res.json({
                status: 400,
                message: err
            })

            res.json({
                status: 200,
                values: 'Data deleted successfully'
            })

        })

    },

    patchUsers: (req, res) => {

        console.log(req.body, Number(req.params.id))
        db.query(`UPDATE users SET ? WHERE id=?`, [req.body, req.params.id], (err, result) => {
            if (err) return res.json({
                status: 400,
                message: err
            })

            res.json({
                status: 200,
                values: 'Data updated successfully'
            })

        })

    }

}

