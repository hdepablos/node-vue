const express = require('express');
const router = express.Router();

router.get('/add', async (req, res) => {
    // res.send('formulario de add a ver a programar siiiiii');
    res.render('links/add')
});

module.exports = router;