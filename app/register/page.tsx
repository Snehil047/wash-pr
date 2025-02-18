"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../login.module.css";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSuccess("Registration successful! Redirecting to login...");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <div className={`container-fluid ${styles.loginContainer}`}>
      {/* Logo */}
      <Image
        src="/nagar.jpeg"
        alt="University Logo"
        className={styles.logo}
        width={120}
        height={120}
      />

      {/* Map */}
      <Image
        src="/ward.jpg"
        alt="Map"
        className={styles.map}
        width={300}
        height={400}
      />

      {/* Headings */}
      <h1 className={styles.heading}>
        Web Based Spatial Waste Disposal Management System
      </h1>
      <h3 className={styles.subheading}>Varanasi, Uttar Pradesh, 221010</h3>

      {/* Registration Form */}
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className={`card shadow p-4 ${styles.loginCard}`}>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-2">
                Register
              </button>
              <button
                type="button"
                className={`btn w-100 ${styles.clearButton}`}
                onClick={() =>
                  setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                  })
                }
              >
                Clear
              </button>
            </form>
            <div className="mt-2">
              Already have an account?{" "}
              <a href="/" className="text-end">
                Login here
              </a>{" "}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2011 ... All rights reserved</p>
        <p>
          Designed & Developed by Obafemi Awolowo University, Ile-Ife, Osun
          State
        </p>
      </footer>
    </div>
  );
}
