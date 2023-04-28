import React, { useState } from "react";
import "./CharityBeneficiariesManagement.css";

const CharityBeneficiariesManagement = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [formData, setFormData] = useState({ name: "" });
  const [inventoryData, setInventoryData] = useState({
    item: "",
    quantity: "",
  });
  const [editingBeneficiary, setEditingBeneficiary] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showCrud, setShowCrud] = useState(false);
  const [showInventory, setShowInventory] = useState(false);

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
      updatedBeneficiaries[editingIndex] = {
        ...formData,
        inventory: beneficiaries[editingIndex].inventory,
      };
      setBeneficiaries(updatedBeneficiaries);
      setEditingBeneficiary(false);
      setShowCrud(false);
    } else {
      setBeneficiaries((prevData) => [
        ...prevData,
        { ...formData, inventory: [] },
      ]);
    }
    setFormData({ name: "", age: "", address: "" });
  };

  const handleInventorySubmit = (e, index) => {
    e.preventDefault();
    const updatedBeneficiaries = [...beneficiaries];
    updatedBeneficiaries[index].inventory.push(inventoryData);
    setBeneficiaries(updatedBeneficiaries);
    setInventoryData({ item: "", quantity: "" });
    setShowCrud(false);
    setShowInventory(true)
  };

  const handleEditBeneficiary = (index) => {
    setFormData(beneficiaries[index]);
    setEditingBeneficiary(true);
    setEditingIndex(index);
  };

  const handleDeleteBeneficiary = (index) => {
    setBeneficiaries((prevData) => prevData.filter((_, i) => i !== index));
    setShowCrud(false);
  };

  return (
    <div className="charity-beneficiaries-management">
      <h1>Charity Beneficiaries Management</h1>
      <form onSubmit={handleBeneficiarySubmit}>
        <div className="name">Name</div>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="add-beneficiary">
          <button type="submit">
            {editingBeneficiary ? "Update" : "Add"} Beneficiary
          </button>
        </div>
      </form>
      <h2>Beneficiaries</h2>
      <ul className="beneficiary-container">
        {beneficiaries.map((beneficiary, index) => (
          <li key={index} className="beneficiary">
            <span className="beneficiary-name">{beneficiary.name}</span>
            {!showCrud ? (
              <button
                onClick={() => {
                  setShowCrud(true);
                }}
              >
                Update
              </button>
            ) : (
              <div>
                <div className="buttons">
                  <button onClick={() => handleEditBeneficiary(index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteBeneficiary(index)}>
                    Delete
                  </button>
                  <button onClick={() => setShowCrud(false)}>Cancel</button>
                </div>
                <form
                  id="inventory-form"
                  onSubmit={(e) => handleInventorySubmit(e, index)}
                >
                  <h5 style={{ margin: "0px" }}>Inventory:</h5>
                  <input
                    type="text"
                    name="item"
                    id="item"
                    onChange={handleInventoryChange}
                    placeholder="Item name"
                  />
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    onChange={handleInventoryChange}
                    placeholder="Quantity"
                  />
                  <button type="submit">Add</button>
                </form>
              </div>
            )}
            {console.log(beneficiary.inventory)}
            {beneficiary.inventory.length !== 0 ? (
              !showInventory ? (
                <a
                  href="#"
                  onClick={() => {
                    setShowInventory(true);
                  }}
                >
                  Inventories
                </a>
              ) : (
                <div>
                  <a
                    href="#"
                    onClick={() => {
                      setShowInventory(false);
                    }}
                  >
                    Hide inventories
                  </a>
                  <ul style={{margin:"0px"}}>
                    {beneficiary.inventory.map((inventory, i) => (
                      <li key={i} className="inventory">
                        <div className="inventory-titles">
                          <li>Item</li>
                          <li>Quantity</li>
                        </div>
                        <div className="inventory-data">
                          <li>{inventory.item}</li>
                          <li>{inventory.quantity}</li>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            ) : (
              <span></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharityBeneficiariesManagement;
