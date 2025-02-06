"use client";

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
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4">
          <div className="card shadow p-4">
            <h2 className="text-center text-secondary mb-4">
              VARANASI SMART ENVIRONMENTAL SOLUTIONS
            </h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
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
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
              <a href="/" className="fs-6 text-primary">
                Forgot Password?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
