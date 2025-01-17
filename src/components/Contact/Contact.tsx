import { useState } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";
import mockData from "../../mocks/contact.json";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLFormElement
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    const data = e.target as HTMLFormElement;
    emailjs
      .sendForm(
        "service_pt8exc9",
        "template_4zuckih",
        data,
        "B8HoHDG7HINqELf2G"
      )
      .then(
        () => {
          setSuccess("Message Sent Successfully!")
        },
        () => {
          setError("An error occurred, please try again.")
        }
      ).finally(async() => {
        setTimeout(() => {
          setError('');
          setSuccess('');
        }, 2000);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-block">
              <label htmlFor="name">{mockData['form.name']}</label>
              <input 
                type="text" 
                id={mockData['form.name'].toLowerCase()} 
                name={mockData['form.name'].toLowerCase()} 
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-block">
              <label htmlFor={mockData['form.email'].toLowerCase()}>{mockData['form.email']}</label>
              <input 
                type="email" 
                id={mockData['form.email'].toLowerCase()} 
                name={mockData['form.email'].toLowerCase()} 
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}  
              />
            </div>
            <div className="input-block-100">
              <label htmlFor="message">{mockData['form.message']}</label>
              <input 
                type="textarea" 
                id={mockData['form.message'].toLowerCase()} 
                name={mockData['form.message'].toLowerCase()} 
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type='submit' className="btn btn-secondary">{mockData['form.submit.btn']}</button>
          </form>
          {!!error && <div className='error-message'>{ error }</div> }
          {!!success && <div className='success-message'>{ success }</div> }
        </div>
      </div>
    </section>
  );
}

export default Contact;
