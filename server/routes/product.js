// Routes define the endpoints or URLs that clients can access to interact with your backend application. They handle incoming HTTP requests and determine how those requests should be processed. Routes are responsible for routing requests to the appropriate controllers based on the URL and HTTP method.

const express = require("express");
const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { create} = require("../controllers/product");

// routes
router.post("/product", authCheck, adminCheck, create);

module.exports = router;