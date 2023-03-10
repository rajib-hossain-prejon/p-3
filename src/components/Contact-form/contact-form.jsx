import React from 'react';
import ContactFromDate from '../../data/sections/form-info.json';
import { Formik, Form, Field } from 'formik';
import { sendContactForm } from '../../../lib/api';

const ContactForm = () => {
  const messageRef = React.useRef(null);

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <section className='contact section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='form md-mb50'>
              <h4 className='fw-700 color-font mb-50'>Get In Touch.</h4>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                onSubmit={async (values) => {
                  await sendMessage(500);
                  try {
                    await sendContactForm(values);
                    alert('Message Sent Successfully');
                  } catch (error) {
                    error: error.message;
                  }

                  // show message
                  messageRef.current.innerText = `Your Message has been successfully sent. I will contact you soon.`;
                  setTimeout(() => {
                    messageRef.current.innerText = '';
                  }, 10000);
                  // Reset the values
                  values.name = '';
                  values.email = '';
                  values.message = '';
                  // clear message
                }}
              >
                {({ errors, touched }) => (
                  <Form id='contact-form'>
                    <div
                      className='messages'
                      ref={messageRef}
                      style={{
                        color: 'green',
                        fontSize: '1rem',
                        fontWeight: 600,
                      }}
                    ></div>

                    <div className='controls'>
                      <div className='form-group'>
                        <Field
                          id='form_name'
                          type='text'
                          name='name'
                          placeholder='Name'
                          required='required'
                        />
                      </div>
                      <div className='form-group'>
                        <Field
                          validate={validateEmail}
                          id='form_email'
                          type='email'
                          name='email'
                          placeholder='Email'
                        />
                        {errors.email && touched.email && (
                          <div>{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className='form-group'>
                      <Field
                        as='textarea'
                        id='form_message'
                        name='message'
                        placeholder='Message'
                        rows='4'
                        required='required'
                      />
                    </div>

                    <button type='submit' className='butn bord'>
                      <span>Send Message</span>
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className='col-lg-5 offset-lg-1'>
            <div className='cont-info'>
              <h4 className='fw-700 color-font mb-50'>Contact Info.</h4>
              <h3 className='wow' data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className='item mb-40'>
                <h5>
                  <a href='#0'>{ContactFromDate.email}</a>
                </h5>
                <h5>{ContactFromDate.phone}</h5>
              </div>
              {/* <h3 className='wow' data-splitting>
                Visit Us.
              </h3>
              <div className='item'>
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div> */}
              <div className='social mt-50'>
                <a
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/rajib-hossain-prejon-089505202',
                      '_blank'
                    )
                  }
                >
                  <i className='fab fa-linkedin mx-4'></i>
                </a>
                <a
                  onClick={() =>
                    window.open('https://wa.me/+8801518647550', '_blank')
                  }
                >
                  <i className='fab fa-whatsapp mx-4'></i>
                </a>
                <a
                  onClick={() =>
                    window.open(
                      'https://github.com/rajib-hossain-prejon/',
                      '_blank'
                    )
                  }
                >
                  <i className='fab fa-github mx-4'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
