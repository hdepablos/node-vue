const express = require('express');
const router = express.Router();

router.get('/register', async (req, res) => {
    res.render('auth/register', { title: 'my other page', layout: 'main-supe' });
});

module.exports = router;