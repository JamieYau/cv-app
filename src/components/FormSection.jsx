import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/FormSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FormSection({ fields, heading, onFormChange }) {
  const [submitted, setSubmitted] = useState(false);
  const [fieldData, setFieldData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = field.initialValue;
      return acc;
    }, {})
  );
  const [expanded, setExpanded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    onFormChange(heading, fieldData);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFieldData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="form-section">
      <div className="header">
        <h2>{heading}</h2>
        <button className="toggle-button" onClick={handleExpand}>
          {expanded ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {expanded && (
        <>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div className="input-container" key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={fieldData[field.name]}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required={field.required}
                      value={fieldData[field.name]}
                      onChange={handleFieldChange}
                    />
                  )}
                </div>
              ))}
              <div className="button-container">
                <button type="submit">Save</button>
              </div>
            </form>
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </div>
  );
}

FormSection.propTypes = {
  heading: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      required: PropTypes.bool.isRequired,
      initialValue: PropTypes.string.isRequired,
    })
  ).isRequired,
  onFormChange: PropTypes.func.isRequired,
};
