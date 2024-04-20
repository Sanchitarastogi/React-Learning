import Contact from "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form className="form">
        <label>Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Message</label>
        <textarea type="text"></textarea>
        <button className="send-button" type="primary" size="large"> Send</button>
      </form>
    </div>
  );
};
