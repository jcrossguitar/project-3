var express = require('express');
var router = express.Router();
const ViewOrder = require('../models/viewOrder');

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

router.get('/inventory', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "inventory"
  });
});

router.post('/inventory', function(req, res, next) {
  console.log('req.body', req.body)
  res.json({
    message: "route hit"
  });
});

router.get('/assembly', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "assembly"
  });
});

router.get('/qc', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "qc"
  });
});

router.get('/shipping', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "shipping"
  });
});

router.get('/example', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "example"
  });
});

router.get('/example/:id', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "example"
  });
});


router.get('/Profile', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "vieworder"
  });
});

router.get('/PrivateRoute', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "vieworder"
  });
});

router.post('/vieworder', function(req, res, next) {
  console.log('req bodyyy', req.body);
  ViewOrder.create(req.body).then(order => res.send(order)).catch(err => res.status(500).send(err));  
});

router.get('/vieworder', function(req, res, next) {
  res.json({
    app: "project_3",
    health: 200,
    name: "vieworder"
  });
});

router.get('/cheese/:id', (req, res, next) => {
  console.log("REQUEST CHEESE ID:", req.params.id);
  res.json({
    name: "Humbolt Fog",
    price: 1500,
    description: "Meh"
  });
});

router.get('/vieworder/:id', (req, res, next) => {
  console.log("REQUEST ORDER ID:", req.params.id);
  res.json({
    name: "ORDER 1",
    price: 1500,
    description: "20 MICRO-PROCESSORS"
  });
});

  // ;asndf;kjasndf;nasdkfjas;fdn;asdnf;oasdnf;kjsandf;lasdnf
  
module.exports = router;
