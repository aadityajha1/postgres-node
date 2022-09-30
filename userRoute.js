const express = require('express')
const router = express.Router();
const pool = require('./db')
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Success'
    })
})

router.post('/create', (req, res) => {
    try{
        const {id, full_name, email} = req.body;
        pool.query(`insert into test(id, Full_name, Email) values ('${id}', '${full_name}', '${email}') returning *`, (error, results) => {
            if(error){
                console.log(error);
                return res.status(400).json({error})
            }
            return res.status(200).json({success: true, message: 'User created successfully', data: results.rows[0]})
        })
    }catch(err){
        console.log(err)
        res.status(400).json({success: false, message: JSON.stringify(err)})
    }
})

module.exports = router;