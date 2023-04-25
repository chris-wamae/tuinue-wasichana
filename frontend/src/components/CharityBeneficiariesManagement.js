import React, { useState } from 'react';
import './CharityBeneficiariesManagement.css';

const CharityBeneficiariesManagement = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', address: '' });
  const [inventoryData, setInventoryData] = useState({ item: '', quantity: '' });
  const [editingBeneficiary, setEditingBeneficiary] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInventoryChange = (e) => {
    const { name, value } = e.target;
    setInventoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBeneficiarySubmit = (e) => {
    e.preventDefault();
    if (editingBeneficiary) {
      const updatedBeneficiaries = [...beneficiaries];
      updatedBeneficiaries[editingIndex] = { ...formData, inventory: beneficiaries[editingIndex].inventory };
      setBeneficiaries(updatedBeneficiaries);
      setEditingBeneficiary(false);
    } else {
      setBeneficiaries((prevData) => [...prevData, { ...formData, inventory: [] }]);
    }
    setFormData({ name: '', age: '', address: '' });
  };

  const handleInventorySubmit = (e, index) => {
    e.preventDefault();
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index].inventory.push(inventoryData);
    setBeneficiaries(updatedBeneficiaries);
    setInventoryData({ item: '', quantity: '' });
  };

  const handleEditBeneficiary = (index) => {
    setFormData(beneficiaries[index]);
    setEditingBeneficiary(true);
    setEditingIndex(index);
  };

  const handleDeleteBeneficiary = (index) => {
    setBeneficiaries((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="charity-beneficiaries-management">
      <h1>Charity Beneficiaries Management</h1>
      <form onSubmit={handleBeneficiarySubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">{editingBeneficiary ? 'Update' : 'Add'} Beneficiary</button>
      </form>
      <h2>Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary, index) => (
          <li key={index}>
            {beneficiary.name}, {beneficiary.age} years old, {beneficiary.address}
            <div>
              <button onClick={() => handleEditBeneficiary(index)}>Edit</button>
              <button onClick={() => handleDeleteBeneficiary(index)}>Delete</button>
            </div>
            <form onSubmit={(e) => handleInventorySubmit(e, index)}>
              <label htmlFor="item">Item</label>
              <input
                type="text"
                name="item"
                id="item"
                value={inventoryData.item}
                onChange={handleInventoryChange}
              />
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                value={inventoryData.quantity}
                onChange={handleInventoryChange}
              />
              <button type="submit">Add Inventory</button>
            </form>
            <h3>Inventory</h3>
            <ul>
              {beneficiary.inventory.map((inventory, i) => (
                <li key={i}>
                  {inventory.item}, {inventory.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityBeneficiariesManagement;