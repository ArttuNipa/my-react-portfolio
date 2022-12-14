import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i8alq68', 'template_czdxajo', form.current, '51Gop3LJQxsIXpxXQ')
      .then((result) => {
          console.log(result.text);
          alert("Form Submitted Successfully");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <div className="titles">
      <h2>Ota yhteyttä</h2>
      </div>

      <div className="container contact__container">
        <div className="contact__options">
          {/* EMAIL */}
          <article className="contact__option">
            <h4>Email</h4>
            <h5>Arttu.Viitajylha(at)gmail.com</h5>
            <p>Laita viestiä!</p>
          </article>

          {/* LINKEDIN */}
          <article className="contact__option">
            <h4>Linkedin</h4>
            <h5>Arttu Viitajylhä</h5>
            <a href="https://www.linkedin.com/in/arttu-viitajylh%C3%A4-3a186b222/">Lisää minut!</a>
          </article>

          <article className="contact__option">
            <h4>Discord</h4>
            <h5>orc hugs#8207</h5>
            <p>Laita viestiä!</p>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="name" name='name' placeholder='Nimi' required/>
          <input type="email" name='email' placeholder='Sähköposti' required/>
          <textarea name="message" rows="12" placeholder='Viesti' required></textarea>
          <button type='submit' className='btn btn-primary'>Lähetä</button>
        </form>

      </div>
    </section>
  )
}

export default Contact