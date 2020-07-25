const { Router } = require('express');

const router = Router();

router.post('/signup', (req, res) => {
    res.json({message: 'Signup is sucessfull'})
})

router.post('/login', (req, res) => {
    res.json({message: 'Login is sucessfull'})
})

module.exports = router;