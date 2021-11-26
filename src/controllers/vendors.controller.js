const { VendorsModel } = require("../models");
const { _copy } = require("../utils/helper");

exports.findAllVendors = async (req, res) => {
  try {
    const vendors = await VendorsModel(req.db).findAll();
    return res.status(200).json({
      message: "Vendors fetched successfully!",
      vendors: _copy(vendors),
    });
  } catch (e) {
    console.log("====> Error while fetching all the vendors : ", e);
    return res.status(500).json({ message: e });
  }
};
