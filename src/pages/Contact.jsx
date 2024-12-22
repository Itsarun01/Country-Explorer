const Contact = () => {
  
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
            <input
              type="text"
              name="username"
              className="form-control"
              required
              placeholder="Enter Your Name"
              autoComplete="false"
            />
            <input
              type="email"
              name="email"
              className="form-control"
              required
              placeholder="Enter Your Email"
              autoComplete="false"
            />
            <textarea
              name="message"
              rows="10"
              className="form-control"
              required
              placeholder="Enter Your Message"
              autoComplete="false"
            ></textarea>
            <button type="submit" value="send" className="submit-btn">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
