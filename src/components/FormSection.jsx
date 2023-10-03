import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/FormSection.css";

export default function FormSection({ fields, heading }) {
  const [submitted, setSubmitted] = useState(false);
  const [fieldData, setFieldData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue;
      return acc;
    }, {})
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFieldData((prevData) => ({ ...prevData, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="form-section">
        <h2>{heading}</h2>
        <div className="data-container">
          {fields.map((field) => (
            <div className="data-item" key={field.name}>
              <span className="data-label">{field.label}:</span>
              <span className="data-value">{fieldData[field.name]}</span>
            </div>
          ))}
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
    <form className="form-section" onSubmit={handleSubmit}>
      <h2>{heading}</h2>
      {fields.map((field) => (
        <div className="input-container" key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            required={field.required}
            value={fieldData[field.name]}
            onChange={handleFieldChange}
          />
        </div>
      ))}
      <div className="button-container">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

FormSection.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
      initialValue: PropTypes.string.isRequired,
    })
  ).isRequired,
  heading: PropTypes.string.isRequired,
};
