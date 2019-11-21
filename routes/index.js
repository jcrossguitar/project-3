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
    health: 200,
    name: "login"
  });
});

router.get('/api/sales', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "admin"
  });
});

router.get('/api/inventory', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "inventory"
  });
});

router.get('/api/assembly', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "assembly"
  });
});

router.get('/api/qc', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "qc"
  });
});

router.get('/api/shipping', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "shipping"
  });
});

router.get('/api/example', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "example"
  });
});

router.get('/api/example/:id', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "example"
  });
});

router.get('/api/vieworder', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "vieworder"
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

  // ;asndf;kjasndf;nasdkfjas;fdn;asdnf;oasdnf;kjsandf;lasdnf
  
module.exports = router;
