const router = require("express").Router();
const orderRoutes = require("./orders");

// Book routes
router.use("/orders", orderRoutes);

module.exports = router;
