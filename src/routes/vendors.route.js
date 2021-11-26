const { findAllVendors } = require("../controllers/vendors.controller");

const Router = require("express").Router();

Router.get("/all", findAllVendors);

module.exports = Router;
