```jsx
import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration form submitted successfully!");
  };

  return (
    <div className="register_container">
      <h1 className="header">Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input className="input_field" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input className="input_field" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input className="input_field" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input className="input_field" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input className="input_field" type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        <div className="submit_panel">
          <button className="submit" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
```
