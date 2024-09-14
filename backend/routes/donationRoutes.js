const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");

// Donation routes
router.post("/donate", donationController.createDonation);
router.get("/my-donations/:userId", donationController.getUserDonations);

module.exports = router;
