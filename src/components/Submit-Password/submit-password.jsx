import { Field, Form, Formik } from 'formik';
import React from 'react';

const SubmitPassword = () => {
  return (
    <>
      <div className='main-content'>
        <section className='contact section-padding'>
          <div className='container'>
            <div className='row'>
              {/* ---------- 3 Col GAP ------------ */}
              <div className='col-lg-3'></div>
              {/* ---------- Ask PasswordS ------------ */}
              <div className='col-lg-6 '>
                <div className='form md-mb50'>
                  <h4 className='fw-700 color-font mb-50'>
                    Submit Password to Get Project
                  </h4>
                  <Formik
                    initialValues={{
                      password: '',
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);

                      handleSubmitYou(values.password);

                      setTimeout(() => {}, 10000);
                      // Reset the values
                      values.password = '';

                      // clear message
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form id='contact-form'>
                        <div className='controls'>
                          <div className='form-group'>
                            <Field
                              id='form_password'
                              type='password'
                              name='password'
                              placeholder='password'
                              required='required'
                            />
                          </div>
                        </div>

                        <button type='submit' className='butn bord'>
                          <span>Submit</span>
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
              {/* ---------- 3 Col GAP ------------ */}
              <div className='col-lg-3'></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SubmitPassword;
