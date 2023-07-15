import { Field, Form, Formik } from 'formik';
import React from 'react';

import { Country } from 'country-state-city';
import * as Yup from 'yup';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  country: Yup.string().required('Required'),
  review: Yup.string()
    .min(2, 'Too Short!')
    .max(5000, 'Too Long!')
    .required('Required'),
});

const ClientProjectForms = ({ clientsProject }) => {
  const messageRef = React.useRef(null);
  const fileInputRef = React.useRef(null);

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  const countryOptions = Country.getAllCountries().map((c) => ({
    value: c.isoCode,
    label: c.name,
  }));

  // const cityOptions = City.getCitiesOfCountry('US').map((c) => ({
  //   value: c.name,
  //   label: c.name,
  // }));

  return (
    <section className='contact section-padding'>
      <div className='container'>
        <div className='row'>
          {/* --------- Project ----------- */}

          <div className='col-lg-5 '>
            <div className='cont-info'>
              <h4 className='fw-700 color-font mb-50'>Your Project</h4>
              <h2
                className='wow mb-20'
                data-splitting
                style={{ color: '#FF8C69' }}
              >
                {clientsProject.title}
              </h2>
              <p className='wow mb-10' data-splitting>
                Click the button below to get your Project
              </p>
              <div className='item mb-40'>
                <button
                  type='submit'
                  className='butn bord'
                  style={{ backgroundColor: '#5cb85c', height: '80px' }}
                >
                  <span>Get Project </span>
                </button>
              </div>
            </div>
          </div>

          {/* --------- Review --------- */}

          <div className='col-lg-6 offset-lg-1'>
            <div className='form md-mb50'>
              {/* ---------------------- Review Form ---------------- */}
              {clientsProject.review_submitted && (
                <React.Fragment>
                  <div className='mt-50'>
                    <h4
                      className='fw-700 color-font mb-20'
                      style={{ textAlign: 'center' }}
                    >
                      You Have Submitted Your Review.
                    </h4>
                    <h3
                      className='fw-700 color-font mb-50'
                      style={{ textAlign: 'center' }}
                    >
                      THANK YOU!
                    </h3>
                  </div>
                </React.Fragment>
              )}
              {!clientsProject.review_submitted && (
                <React.Fragment>
                  <h4 className='fw-700 color-font mb-50'>Drop a Review</h4>
                  <Formik
                    validationSchema={validationSchema}
                    initialValues={{
                      name: '',
                      country: '',
                      review: '',
                      image: null,
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);
                      console.log(values);
                      // handle image upload here
                      const imageFile = values.image;
                      if (imageFile) {
                        // perform the upload logic
                        console.log('Uploading image:', imageFile);
                      }

                      // remaining form submission logic
                      messageRef.current.innerText = `Your review has been submitted successfully.`;
                      setTimeout(() => {
                        messageRef.current.innerText = '';
                      }, 10000);
                      // Reset the values
                      values.name = '';
                      values.country = '';
                      values.review = '';
                      values.image = null;
                    }}
                  >
                    {({ errors, touched, setFieldValue }) => (
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
                          {/* ---------------Image---------- */}

                          <div className='form-group'>
                            <input
                              type='file'
                              id='form_image'
                              name='image'
                              accept='image/*'
                              onChange={(event) => {
                                const file = event.target.files[0];
                                setFieldValue('image', file);
                              }}
                              ref={fileInputRef}
                              style={{ display: 'none' }}
                            />
                            <label htmlFor='form_image'>Upload Image</label>
                            <button
                              type='button'
                              onClick={() => fileInputRef.current.click()}
                            >
                              Select Image
                            </button>
                          </div>

                          <div className='form-group'>
                            <Field
                              id='form_name'
                              type='text'
                              name='name'
                              placeholder='Your Name*'
                              required='required'
                            />
                            {errors.name && touched.name && (
                              <div style={{ color: '#dc3545' }}>
                                {errors.name}
                              </div>
                            )}
                          </div>
                          <div className='form-group'>
                            {/* <label htmlFor='country'>Country</label> */}
                            <Field
                              as='select'
                              name='country' // make sure name matches the field name in initialValues
                              required='required'
                              // onChange={(event) => {
                              //   const countryCode = event.target.value;
                              //   setFieldValue(
                              //     'city',
                              //     City.getCitiesOfCountry(countryCode).map(
                              //       (c) => c.name
                              //     )
                              //   );
                              // }}
                              style={{
                                width: '100%',
                                height: '36px',
                                borderRadius: '5px',
                                color: '#D1D2D4',
                                backgroundColor: '#0E0F10',
                              }}
                            >
                              <option value=''>Select Your country*</option>
                              {countryOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Field>

                            {errors.country && touched.country ? (
                              <div>{errors.country}</div>
                            ) : null}
                          </div>
                        </div>
                        <div className='form-group'>
                          <Field
                            as='textarea'
                            id='form_message'
                            name='review'
                            placeholder='Your Review...*'
                            rows='4'
                            required='required'
                          />
                          {errors.review && touched.review && (
                            <div style={{ color: '#dc3545' }}>
                              {errors.review}
                            </div>
                          )}
                        </div>

                        <button type='submit' className='butn bord'>
                          <span>Submit</span>
                        </button>
                      </Form>
                    )}
                  </Formik>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProjectForms;
