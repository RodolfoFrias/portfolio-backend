const express = require('express');

const controller = require('../controllers/admin');

const router = express.Router();

router.get('/projects', controller.getProjects);

module.exports = router;
