import "./App.css";
import FormSection from "./components/FormSection";

function App() {
  const generalInfoFields = [
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
  ];

  const educationFields = [
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
  ];

  const experienceFields = [
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
  ];

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <FormSection heading="General Information" fields={generalInfoFields} />
      <FormSection heading="Education" fields={educationFields} />
      <FormSection heading="Experience" fields={experienceFields} />
    </div>
  );
}

export default App;
