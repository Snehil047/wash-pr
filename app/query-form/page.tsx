"use client";
import React, { useState } from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import "./QueryManagement.css";

const QueryManagementForm = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    queryId: "",
    name: "",
    email: "",
    phoneNumber: "",
    queryType: "",
    department: "",
    address: "",
    subject: "",
    description: "",
    priority: "",
    status: "",
    transferStation: "",
    queryImage: null,
    queryImagePreview: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        queryImage: file,
        queryImagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newRecord = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
    };
    setRecords((prevRecords) => [...prevRecords, newRecord]);
    setFormData({
      queryId: "",
      name: "",
      email: "",
      phoneNumber: "",
      queryType: "",
      department: "",
      address: "",
      subject: "",
      description: "",
      transferStation: "",
      priority: "",
      status: "",
      queryImage: null,
      queryImagePreview: "",
    });
  };

  return (
    <div className="query-management-system mt-3">
      <Container>
        <header className="header offset-3 text-center">
          <img src="/nagar.jpeg" alt="Organization Logo" className="logo" />
          <div className="title-container">
            <h1>Web Based Use Of GIS</h1>
            <h2>Nagar Nigam, Varanasi, 221106</h2>
          </div>
        </header>

        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            {formData.queryImagePreview ? (
              <img
                src={formData.queryImagePreview}
                alt="Uploaded Query"
                className="img-fluid map-image"
              />
            ) : (
              <img
                src="/transfer.jpg"
                alt="transfer Map"
                className="img-fluid map-image"
              />
            )}
          </div>

          <div className="col-md-6">
            <div className="form-section">
              <h2>Usage Of GIS on the Webpage</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Query ID:</Form.Label>
                  <Form.Control
                    type="text"
                    name="queryId"
                    value={formData.queryId}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Query Type:</Form.Label>
                  <Form.Control
                    type="text"
                    name="queryType"
                    value={formData.queryType}
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
                  <Form.Label>Location of Transfer Station:</Form.Label>
                  <Form.Select
                    name="transferStation"
                    value={formData.transferStation}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Transfer Station --</option>
                    {/* Permanent Transfer Stations */}
                    <option value="Aurangabad Transfer Station">
                      Aurangabad Transfer Station
                    </option>
                    <option value="Azad Park Transfer Station">
                      Azad Park Transfer Station
                    </option>
                    <option value="Bakarbad Transfer Station">
                      Bakarbad Transfer Station
                    </option>
                    <option value="Beniya Transfer Station">
                      Beniya Transfer Station
                    </option>
                    <option value="Chandua Vegetable Market Transfer Station">
                      Chandua Vegetable Market Transfer Station
                    </option>
                    <option value="Circuit House Transfer Station">
                      Circuit House Transfer Station
                    </option>
                    <option value="CMO Office Road Durgakund Transfer Station">
                      CMO Office Road Durgakund Transfer Station
                    </option>
                    <option value="Godowlia Transfer Station">
                      Godowlia Transfer Station
                    </option>
                    <option value="Hadha Transfer Station">
                      Hadha Transfer Station
                    </option>
                    <option value="Hartirath Transfer Station">
                      Hartirath Transfer Station
                    </option>
                    <option value="Machhodari Transfer Station">
                      Machhodari Transfer Station
                    </option>
                    <option value="Pitarkunda Transfer Station">
                      Pitarkunda Transfer Station
                    </option>
                    <option value="Prachi Talkies Transfer Station">
                      Prachi Talkies Transfer Station
                    </option>
                    <option value="Reori Talab Transfer Station">
                      Reori Talab Transfer Station
                    </option>
                    <option value="Senpura Transfer Station">
                      Senpura Transfer Station
                    </option>
                    <option value="Shivala Transfer Station">
                      Shivala Transfer Station
                    </option>
                    <option value="Shivpur Transfer Station">
                      Shivpur Transfer Station
                    </option>
                    <option value="Vidyapeeth Transfer Station">
                      Vidyapeeth Transfer Station
                    </option>

                    {/* Transfer Station & WTP */}
                    <option value="Bhawaniya Pokhari TS & WTP">
                      Bhawaniya Pokhari TS & WTP
                    </option>
                    <option value="IDH Transfer Station & WTP">
                      IDH Transfer Station & WTP
                    </option>
                    <option value="Pahariya Mandi TS & WTP">
                      Pahariya Mandi TS & WTP
                    </option>

                    {/* Temporary Transfer Stations */}
                    <option value="Harballampur Transfer Station">
                      Harballampur Transfer Station
                    </option>
                    <option value="Kudiya Maidan Transfer Station">
                      Kudiya Maidan Transfer Station
                    </option>
                    <option value="Rai Sahab Bageecha Azamgarh Road Transfer Station">
                      Rai Sahab Bageecha Azamgarh Road Transfer Station
                    </option>
                    <option value="Tikulia Nala Sarai Surjan Transfer Station">
                      Tikulia Nala Sarai Surjan Transfer Station
                    </option>
                    <option value="Near Trimurti Hospital Transfer Station">
                      Near Trimurti Hospital Transfer Station
                    </option>

                    {/* Portable Compactor Transfer Stations (PCTSs) */}
                    <option value="Deendayal Hospital Road PCT Station">
                      Deendayal Hospital Road PCT Station
                    </option>
                    <option value="Rangoli Garden PCT Station">
                      Rangoli Garden PCT Station
                    </option>
                    <option value="Varanasi Municipal Corporation PCT Station">
                      Varanasi Municipal Corporation PCT Station
                    </option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Location Of Bin:</Form.Label>
                  <Form.Select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select --</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Status:</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Supporting Image:</Form.Label>
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
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
      {records.length > 0 && (
        <div className="records-section mt-4">
          <h3>Recent Queries</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Query ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>Bin Location</th>
                <th>Status</th>
                <th>Image</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.queryId}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.phoneNumber}</td>
                  <td>{record.queryType}</td>
                  <td>{record.priority}</td>
                  <td>{record.status}</td>
                  <td>
                    {record.queryImagePreview && (
                      <img
                        src={record.queryImagePreview}
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

export default QueryManagementForm;
