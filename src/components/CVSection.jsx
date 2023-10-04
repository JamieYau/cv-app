import { PropTypes } from "prop-types";

export default function CVSection({ formData }) {
  return (
    <>
      <h2>CV Preview</h2>
      <div className="cv">
        {Object.entries(formData).map(([sectionName, sectionData]) => (
          <div className="cv-section" key={sectionName}>
            <h3>{sectionName}</h3>
            <div className="cv-field-container">
              {Object.entries(sectionData).map(([fieldName, fieldValue]) => (
                <div className="cv-field" key={fieldName}>
                  <h4>{fieldName}</h4>
                  <p>{fieldValue}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

CVSection.propTypes = {
  formData: PropTypes.object.isRequired,
};
