var express = require('express');
var router = express.Router();



/* GET React app. */
router.get('/api/health', function(req, res, next) {
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

  router.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

module.exports = router;
