const sql = require("../config/db");

// Create donations and donation_items tables if they don't exist
async function createDonationTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS donations (
        id SERIAL PRIMARY KEY,
        donor_name varchar(20) NOT NULL,
        email varchar(50) NOT NULL,
        phone_number varchar(15) NOT NULL,
        collection_address TEXT NOT NULL,
        description TEXT,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        created_at timestamp default current_timestamp
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS donation_items (
      id SERIAL PRIMARY KEY,
      donation_id INTEGER REFERENCES donations(id) ON DELETE CASCADE,
      item_name VARCHAR(100) NOT NULL,
      quantity INTEGER NOT NULL
    )
  `;
}

createDonationTables();

module.exports = {
  async createDonation(donation) {
    return await sql`
      INSERT INTO donations (donor_name, email, phone_number, collection_address, category, description)
      VALUES (${donation.donor_name}, ${donation.email}, ${donation.phone_number}, ${donation.collection_address}, ${donation.category}, ${donation.description})
      RETURNING *
    `;
  },

  async createDonationItem(donation_id, item) {
    return await sql`
      INSERT INTO donation_items (donation_id, item_name, quantity)
      VALUES (${donation_id}, ${item.item_name}, ${item.quantity})
    `;
  },
};
