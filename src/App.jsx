import "./App.css";
import FormSection from "./components/FormSection";

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

  return (
    <div className="app">
      <h1>CV Builder</h1>
      {sections.map((section) => (
        <FormSection key={section.heading} {...section} />
      ))}
    </div>
  );
}

export default App;
