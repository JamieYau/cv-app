import "./App.css";
import FormSection from "./components/FormSection";
import CVSection from "./components/CVSection";
import { useState } from "react";

function App() {
  const sections = [
    {
      heading: "General Information",
      fields: [
        {
          label: "Full Name",
          name: "fullName",
          type: "text",
          initialValue: "",
          required: true,
        },
        {
          label: "Email",
          name: "email",
          type: "email",
          initialValue: "",
          required: true,
        },
        {
          label: "Phone",
          name: "phone",
          type: "tel",
          initialValue: "",
          required: true,
        },
        {
          label: "Address",
          name: "address",
          type: "text",
          initialValue: "",
          required: false,
        },
      ],
    },
    {
      heading: "Education",
      fields: [
        {
          label: "Degree",
          name: "degree",
          type: "text",
          initialValue: "",
          required: true,
        },
        {
          label: "Institution",
          name: "institution",
          type: "text",
          initialValue: "",
          required: true,
        },
        {
          label: "Year",
          name: "year",
          type: "number",
          initialValue: "",
          required: true,
        },
      ],
    },
    {
      heading: "Experience",
      fields: [
        {
          label: "Company",
          name: "company",
          type: "text",
          initialValue: "",
          required: true,
        },
        {
          label: "Position",
          name: "position",
          type: "text",
          initialValue: "",
          required: true,
        },
        {
          label: "Description",
          name: "description",
          type: "textarea",
          initialValue: "",
          required: true,
        },
        {
          label: "Start Date",
          name: "startDate",
          type: "date",
          initialValue: "",
          required: true,
        },
        {
          label: "End Date",
          name: "endDate",
          type: "date",
          initialValue: "",
          required: false,
        },
      ],
    },
  ];

  const [formData, setFormData] = useState(
    sections.reduce((acc, section) => {
      acc[section.heading] = section.fields.reduce((fieldAcc, field) => {
        fieldAcc[field.label] = field.initialValue;
        return fieldAcc;
      }, {});
      return acc;
    }, {})
  );

  const handleFormChange = (sectionName, sectionData) => {
    setFormData((prevData) => ({
      ...prevData,
      [sectionName]: sectionData,
    }));
  };

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <div className="form-container">
        {sections.map((section) => (
          <FormSection
            key={section.heading}
            {...section}
            onFormChange={handleFormChange}
          />
        ))}
      </div>
      <div className="cv-container">
        <CVSection formData={formData} />
      </div>
    </div>
  );
}

export default App;
