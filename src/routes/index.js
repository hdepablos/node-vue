const { Router } = require('express');
const router = Router();

router.get('/', (req,res) => {
    // res.send('Hello word.... desde nodejs y mysql')
    res.render('links/add');
});

router.get('/base/app', (req,res) => {
    res.render('base/base');
});

router.get('/base/app2', (req,res) => {
    res.render('base/base2');
});

module.exports = router;