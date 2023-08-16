import { useRouter } from 'next/router';
import React from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../config/firebase/firebase';

import { Field, Form, Formik } from 'formik';
import useAuth from '../../context/AuthContext/useAuth';
import { AuthContext } from '../../context/UserAuthContext';
import Done from '../Done/done';
import Failed from '../Failed/Failed';
import Loader from '../Loader/loader';

const ProjectPassForm = ({ noLine }) => {
  const messageRef = React.useRef(null);
  const router = useRouter();

  const authContext = React.useContext(AuthContext);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  const handleSubmit = async ({ projectId, password }, { resetForm }) => {
    setIsSubmitting(true);
    setIsLoading(true);
    await sendMessage(500);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        projectId,
        password
      );
      const user = userCredential.user;
      const userUID = user.uid;
      const strigifyRes = JSON.stringify(user);

      useAuth.logIn(JSON.parse(strigifyRes).stsTokenManager.accessToken);

      router.push(`/project-hub/${userUID}`);
      console.log('Login Done');

      setIsDone(true);

      setIsDone(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setIsLoading(false);
      setIsFailed(true);
      setTimeout(() => {
        // Code to be executed after the timeout
        setIsFailed(false);
      }, 2000);
    }
  };

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
                <p className='wow fadeIn' data-wow-delay='.5s'>
                  Insert Project-ID & Password
                </p>
                <h3 className='wow color-font'>Get Your Ready Project</h3>
                <p className='wow fadeIn' data-wow-delay='.5s'>
                  Contact with me to get your project
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='form wow fadeInUp' data-wow-delay='.5s'>
                <Formik
                  initialValues={{
                    projectId: '',
                    password: '',
                  }}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form id='contact-form'>
                      <div className='controls'>
                        <div className='row'>
                          <div className='col-3' />
                          <div className='col-6'>
                            <div className='form-group'>
                              <Field
                                id='form_name'
                                type='email'
                                name='projectId'
                                placeholder='Project ID'
                                required='required'
                              />
                            </div>
                          </div>
                          <div className='col-3' />
                          <div className='col-3' />
                          <div className='col-6'>
                            <div className='form-group'>
                              <Field
                                id='form_email'
                                type='password'
                                name='password'
                                placeholder='Password'
                                required='required'
                              />
                              {errors.password && touched.password && (
                                <div>{errors.password}</div>
                              )}
                            </div>
                          </div>
                          <div className='col-3' />
                          <div className='col-3' />
                          <div className='col-2'>
                            <div className='text-center'>
                              <button
                                type='submit'
                                className={`nb butn bord ${
                                  isSubmitting ? 'bg-dark' : 'bg-success'
                                } curve mt-30`}
                                disabled={isSubmitting}
                              >
                                <span>
                                  {isSubmitting ? 'Loading...' : 'Submit'}
                                </span>
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

export default ProjectPassForm;
