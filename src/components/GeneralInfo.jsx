import "../styles/GeneralInfo.css";

export default function GeneralInfo() {
  return (
    <form className="general-info">
      <h2>General Info</h2>
      <div className="input-container">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" name="full-name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="button-container">
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
