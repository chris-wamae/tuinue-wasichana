import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import './CharityBeneficiariesManagement.css';
 import './CharityBeneficiariesManagement.css';
//import './components/CharityBeneficiariesManagement.css';
// import './CharityBeneficiariesManagement.css';

// import './components/CharityBeneficiariesManagement.css';



const CharityBeneficiariesManagement = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [newBeneficiary, setNewBeneficiary] = useState({
    name: '',
    story:""
  });

  useEffect(() => {
    fetchBeneficiaries();
  }, []);

  const fetchBeneficiaries = async () => {
    const response = await axios.get('/beneficiaries');
    setBeneficiaries(response.data);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewBeneficiary(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await axios.post('/beneficiaries', newBeneficiary);
      setNewBeneficiary({ name: '', address: '', phoneNumber: '' });
      fetchBeneficiaries();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async id => {
    try {
      await axios.delete(`/beneficiaries/${id}`);
      fetchBeneficiaries();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Charity Beneficiaries Management</h2>
      <h3>New Beneficiary</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newBeneficiary.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="story">Story:</label>
          <input
            type="text"
            id="story"
            name="story"
            value={newBeneficiary.name}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <button type="submit">Create Beneficiary</button>
      </form>
      <h3>List of Beneficiaries</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Inventory</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficiaries.map(beneficiary => (
            <tr key={beneficiary.id}>
              <td>{beneficiary.name}</td>
              <br>
              <td>{beneficiary.address}</td>
              </br>
              <td>{beneficiary.phoneNumber}</td>
              <td>
                {beneficiary.inventories.map(inventory => (
                  <div key={inventory.id}>
                    {inventory.name}: {inventory.quantity}
                  </div>
                ))}
              </td>
              <td>
                <button onClick={() => handleDelete(beneficiary.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};





export default CharityBeneficiariesManagement;




{/* <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newBeneficiary.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newBeneficiary.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div> */}