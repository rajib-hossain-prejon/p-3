import React from 'react';
import { sendContactForm } from '../../../lib/api';

import { Field, Form, Formik } from 'formik';
import Done from '../Done/done';
import Failed from '../Failed/Failed';
import Loader from '../Loader/loader';

const SContactForm = ({ noLine }) => {
  const messageRef = React.useRef(null);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

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
    <>
      {isLoading && <Loader />}
      {isDone && <Done />}
      {isFailed && <Failed />}

      <section className='contact-sec section-padding position-re'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='sec-head  text-center'>
                <h6 className='wow fadeIn' data-wow-delay='.5s'>
                  Contact With Me
                </h6>
                <h3 className='wow color-font'>
                  Let’s Get in Touch And Make Magic Together.
                </h3>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='form wow fadeInUp' data-wow-delay='.5s'>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    message: '',
                  }}
                  onSubmit={async (values) => {
                    setIsLoading(true);
                    await sendMessage(500);
                    try {
                      await sendContactForm(values);
                      setIsLoading(false);
                      setIsDone(true);
                      setTimeout(() => {
                        // Code to be executed after the timeout
                        setIsDone(false);
                      }, 2000);
                    } catch (error) {
                      setIsLoading(false);
                      setIsFailed(true);
                      setTimeout(() => {
                        // Code to be executed after the timeout
                        setIsFailed(false);
                      }, 2000);
                    }

                    // show message

                    // messageRef.current.innerText =
                    //   'Your Message has been successfully sent. I will contact you soon.';
                    setIsLoading(false);
                    // Reset the values
                    values.name = '';
                    values.email = '';
                    values.message = '';
                    // clear message
                    // setTimeout(() => {
                    //   messageRef.current.innerText = '';
                    // }, 10000);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form id='contact-form'>
                      {/* <div
                        className='messages'
                        ref={messageRef}
                        style={{
                          color: 'green',
                          fontSize: '1rem',
                          fontWeight: 600,
                        }}
                      ></div> */}
                      <div className='controls'>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <div className='form-group'>
                              <Field
                                id='form_name'
                                type='text'
                                name='name'
                                placeholder='Name'
                                required='required'
                              />
                            </div>
                          </div>
                          <div className='col-lg-6'>
                            <div className='form-group'>
                              <Field
                                validate={validateEmail}
                                id='form_email'
                                type='email'
                                name='email'
                                placeholder='Email'
                                required='required'
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>

                          <div className='col-12'>
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
                          </div>
                          <div className='col-12'>
                            <div className='text-center'>
                              <button
                                type='submit'
                                className='nb butn bord curve mt-30'
                              >
                                <span>Send Massege</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        {!noLine ? <div className='line bottom left'></div> : ''}
      </section>
    </>
  );
};

export default SContactForm;
