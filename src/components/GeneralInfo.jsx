// section to add general inforamtion like name, email and phone number with input.
export default function GeneralInfo() {
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <form>
        <label htmlFor="full-name">Name</label>
        <input type="text" id="full-name" name="full-name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" />
      </form>
    </div>
  );
}