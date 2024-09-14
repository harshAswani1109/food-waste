const donationModel = require("../models/donationModel");

module.exports = {
  async createDonation(req, res) {
    const {
      donor_name,
      email,
      phone_number,
      collection_address,
      category,
      description,
      items,
    } = req.body;

    try {
      const newDonation = await donationModel.createDonation({
        donor_name,
        email,
        phone_number,
        collection_address,
        category,
        description,
      });

      // Insert items
      for (const item of items) {
        await donationModel.createDonationItem(newDonation.id, item);
      }

      res.status(201).json({
        message: "Donation submitted successfully",
        donation: newDonation,
      });
    } catch (error) {
      res.status(500).json({ message: "Error submitting donation", error });
    }
  },

  async getUserDonations(req, res) {
    const { userId } = req.params;

    try {
      const donations = await donationModel.getDonationsByUser(userId);

      if (!donations.length) {
        return res
          .status(404)
          .json({ message: "No donations found for this user." });
      }

      res
        .status(200)
        .json({ message: "Donations fetched successfully", donations });
    } catch (error) {
      res.status(500).json({ message: "Error fetching donations", error });
    }
  },
};
