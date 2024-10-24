import "./Contact.css";
import mockData from "../../mocks/contact.json";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrapper-contact">
        <div className="main-contact">
          <h3>
            {mockData.title}
            <span>
              {mockData.subtitle}
            </span>
          </h3>
          <form className="contact-form">
            <div className="input-block">
              <label htmlFor="name">{mockData['form.name']}</label>
              <input type="text" id={mockData['form.name'].toLowerCase()} name={mockData['form.name'].toLowerCase()} placeholder="Enter your name"/>
            </div>
            <div className="input-block">
              <label htmlFor={mockData['form.email'].toLowerCase()}>{mockData['form.email']}</label>
              <input type="email" id={mockData['form.email'].toLowerCase()} name={mockData['form.email'].toLowerCase()} placeholder="Enter your email address"/>
            </div>
            <div className="input-block-100">
              <label htmlFor="message">{mockData['form.message']}</label>
              <input type="textarea" id={mockData['form.message'].toLowerCase()} name={mockData['form.message'].toLowerCase()} placeholder="Enter your message"/>
            </div>

            <button className="btn btn-secondary">{mockData['form.submit.btn']}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
