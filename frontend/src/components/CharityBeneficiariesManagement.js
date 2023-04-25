import React, { useState } from 'react';
import './CharityBeneficiariesManagement.css';

const CharityBeneficiariesManagement = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '', address: '' });
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      const updatedBeneficiaries = [...beneficiaries];
      updatedBeneficiaries[editingIndex] = formData;
      setBeneficiaries(updatedBeneficiaries);
      setEditing(false);
    } else {
      setBeneficiaries((prevData) => [...prevData, formData]);
    }
    setFormData({ name: '', age: '', address: '' });
  };

  const handleEdit = (index) => {
    setFormData(beneficiaries[index]);
    setEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setBeneficiaries((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="charity-beneficiaries-management">
      <h1>Charity Beneficiaries Management</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">{editing ? 'Update' : 'Add'} Beneficiary</button>
      </form>
      <h2>Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary, index) => (
          <li key={index}>
            {beneficiary.name}, {beneficiary.age} years old, {beneficiary.address}
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityBeneficiariesManagement;
