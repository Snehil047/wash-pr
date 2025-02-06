"use client";
import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import "./WasteDisposalForm.css";

const WasteDisposalForm = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    siteId: "",
    siteName: "",
    siteManager: "",
    phoneNumber: "",
    collectionDay: "",
    address: "",
    siteDetails: "",
    siteImage: null,
    siteImagePreview: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        siteImage: file,
        siteImagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
    };
    setRecords((prevRecords) => [...prevRecords, newRecord]);
    setFormData({
      siteId: "",
      siteName: "",
      siteManager: "",
      phoneNumber: "",
      collectionDay: "",
      address: "",
      siteDetails: "",
      siteImage: null,
      siteImagePreview: "",
    });
  };

  return (
    <div className="waste-disposal-system">
      <Container>
        <header className="header offset-3 text-center">
          <img src="/nagar.jpeg" alt="University Logo" className="logo" />
          <div className="title-container">
            <h1>Query & Complaint Managment System</h1>
            <h3>Nagar Nigam, Varanasi, 221106</h3>
          </div>
        </header>

        <div className="row">
          <div className="col-md-5 offset-1 d-flex align-items-center justify-content-center">
            {formData.siteImagePreview ? (
              <img
                src={formData.siteImagePreview}
                alt="Uploaded Site"
                className="img-fluid map-image"
              />
            ) : (
              <img
                src="/ward.jpg"
                alt="Ward Map"
                className="img-fluid map-image"
              />
            )}
          </div>

          <div className="col-md-6">
            <div className="form-section">
              <h2>Submit Your Query</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Ward No:</Form.Label>
                  <Form.Control
                    width={"400px"}
                    type="text"
                    name="siteId"
                    value={formData.siteId}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ward Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name of the Location:</Form.Label>
                  <Form.Control
                    type="text"
                    name="siteManager"
                    value={formData.siteManager}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone number:</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Address:</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Day of Collection:</Form.Label>
                  <Form.Select
                    name="collectionDay"
                    value={formData.collectionDay}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Site Details:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="siteDetails"
                    value={formData.siteDetails}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Site Image:</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Form.Group>
                <Button
                  variant="secondary"
                  type="submit"
                  className="create-btn"
                >
                  Create
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      {records.length > 0 && (
        <div className="records-section mt-4">
          <h3>Recent Records</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Site ID</th>
                <th>Site Name</th>
                <th>Site Manager</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Collection Day</th>
                <th>Site Details</th>
                <th>Site Image</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.siteId}</td>
                  <td>{record.siteName}</td>
                  <td>{record.siteManager}</td>
                  <td>{record.phoneNumber}</td>
                  <td>{record.address}</td>
                  <td>{record.collectionDay}</td>
                  <td>{record.siteDetails}</td>
                  <td>
                    {record.siteImagePreview && (
                      <img
                        src={record.siteImagePreview}
                        alt="Site"
                        width={200}
                        className="table-img"
                      />
                    )}
                  </td>
                  <td>{record.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default WasteDisposalForm;
