"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./login.module.css";

const VALID_CREDENTIALS = {
  email: "drawadhesh@gmail.com",
  password: "drawadhesh@123",
};

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (
      formData.email === VALID_CREDENTIALS.email &&
      formData.password === VALID_CREDENTIALS.password
    ) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
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

      {/* Login Form */}
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className={`card shadow p-4 ${styles.loginCard}`}>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username:</label>
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
              <button type="submit" className="btn btn-primary w-100 mb-2">
                Login
              </button>
              <button
                type="button"
                className={`btn w-100 ${styles.clearButton}`}
                onClick={() => setFormData({ email: "", password: "" })}
              >
                Clear
              </button>
            </form>
            <div className="mt-2">
              Dont have an account?{" "}
              <a href="/register" className="text-end">
                Register here
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
