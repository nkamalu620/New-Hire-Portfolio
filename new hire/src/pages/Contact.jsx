import React from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Message:
          <textarea required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;