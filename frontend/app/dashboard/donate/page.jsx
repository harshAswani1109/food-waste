'use client';
import { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';

export default function DonatePage() {
    const { user } = useUser(); // Ensure this is correctly imported and used

    // Log user data to check if it's being set correctly
    useEffect(() => {
      console.log('User data in DonatePage:', user);
    }, [user]);

    // Check if user is null and handle accordingly
    if (!user) {
      return <div>Please log in to donate.</div>; // Or redirect to login page
    }


  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [collectionAddress, setCollectionAddress] = useState('');
  const [items, setItems] = useState([{ item_name: '', quantity: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { item_name: '', quantity: 0 }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      donor_name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      user_id: user.id,
      collection_address: collectionAddress,
      category,
      description,
      items: items.filter(item => item.item_name && item.quantity),
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/donations/donate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        alert('Donation submitted successfully!');
        // Reset form or redirect
      } else {
        throw new Error('Failed to submit donation');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit donation. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Donate Items</h1>
      <form onSubmit={handleSubmit}>
        {/* Locked user information fields */}
        <div className="mb-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
        </div>

        {/* Editable fields */}
        <div className="mb-4">
          <label className="block mb-2">Collection Address:</label>
          <input
            type="text"
            value={collectionAddress}
            onChange={(e) => setCollectionAddress(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select category</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Dynamic item fields */}
        <div className="mb-4">
          <label className="block mb-2">Items:</label>
          {items.map((item, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                value={item.item_name}
                onChange={(e) => handleItemChange(index, 'item_name', e.target.value)}
                placeholder="Item name"
                required
                className="flex-1 p-2 border rounded mr-2"
              />
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                placeholder="Quantity"
                required
                min="1"
                className="w-24 p-2 border rounded"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddItem} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
            Add Item
          </button>
        </div>

        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Submit Donation
        </button>
      </form>
    </div>
  );
}