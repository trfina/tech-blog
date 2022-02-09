// collect the packaged group of endpoints and prefix them with the path api
const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const withAuth = require('../utils/auth');

router.use('/api', apiRoutes);
// router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);



router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;