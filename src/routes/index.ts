const express = require('express');
// controllers
const users = require('../controllers/user.ts');
// middlewares
const { encode } = require('../middlewares/jwt.ts');

const router = express.Router();

router
  .post('/login/:userId', encode, (req: any, res: any, next: any) => { });

module.exports = router;