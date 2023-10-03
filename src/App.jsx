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

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <FormSection heading="General Information" fields={generalInfoFields} />
    </div>
  );
}

export default App;
