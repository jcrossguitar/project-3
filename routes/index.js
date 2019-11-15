var express = require('express');
var router = express.Router();



/* GET React app. */
router.get('/api/health', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/login', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/admin', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/inventory', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/assembly', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/qualityControl', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/shipping', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/vieworder', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200
  });
});

router.get('/api/cheese/:id', (req, res, next) => {
  console.log("REQUEST CHEESE ID:", req.params.id);
  res.json({
    name: "Humbolt Fog",
    price: 1500,
    description: "Meh"
  });
});

router.get('/api/vieworder/:id', (req, res, next) => {
  console.log("REQUEST ORDER ID:", req.params.id);
  res.json({
    name: "ORDER 1",
    price: 1500,
    description: "20 MICRO-PROCESSORS"
  });
});

  router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

module.exports = router;
