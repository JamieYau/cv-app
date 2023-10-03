import { useState } from "react";
import "../styles/GeneralInfo.css";

export default function GeneralInfo() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  if (submitted) {
    return (
      <div className="general-info">
        <h2>General Info</h2>
        <div className="data-container">
          <div className="data-item">
            <span className="data-label">Full Name:</span>
            <span className="data-value">{fullName}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Email:</span>
            <span className="data-value">{email}</span>
          </div>
          <div className="data-item">
            <span className="data-label">Phone:</span>
            <span className="data-value">{phone}</span>
          </div>
        </div>
        <div className="button-container">
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="general-info" onSubmit={handleSubmit}>
      <h2>General Info</h2>
      <div className="input-container">
        <label htmlFor="full-name">Full Name</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          required
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className="button-container">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
