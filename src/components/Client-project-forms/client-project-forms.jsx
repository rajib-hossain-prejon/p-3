import { Field, Form, Formik } from 'formik';
import React from 'react';

import { Country } from 'country-state-city';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import dbs from '../../api/dbs';
import { auth, db, storage } from '../../config/firebase/firebase';
import useAuth from '../../context/AuthContext/useAuth';
import { AuthContext } from '../../context/UserAuthContext';
import Done from '../Done/done';
import Failed from '../Failed/Failed';
import Loader from '../Loader/loader';

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

const ClientProjectForms = ({ project }) => {
  const router = useRouter();
  const messageRef = React.useRef(null);
  const fileInputRef = React.useRef(null);
  const [shouldReload, setShouldReload] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDone, setIsDone] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const authContext = React.useContext(AuthContext);
  const reviewCollectionRef = collection(db, dbs.REVIEWS);

  const handleGetProjectClick = () => {
    if (project?.projectLink) {
      window.open(project.projectLink, '_blank');
    }
  };

  const handleReviewSubmit = async (
    { country, name, review, image },
    { resetForm }
  ) => {
    setIsLoading(true);
    setIsSubmitting(true);
    await sendMessage(500);

    // handle image upload here
    const imageFile = image;
    if (imageFile) {
      // perform the upload logic

      console.log('Uploading image:', imageFile);
    }
    const projectDocRef = doc(db, dbs.PROJECT_HUB, project?.id);

    // remaining form submission logic
    try {
      const reviewDocRef = await addDoc(reviewCollectionRef, {
        name,
        country,
        review,
        visible: false,
        userId: project?.id,
        projectName: project?.projectName,
        // userId: auth?.currentUser?.uid,
        //  userId: user.user_id,

        image: {}, // Initialize the images object
      });

      const docId = reviewDocRef.id;

      if (image) {
        const imagesFolderRef = await ref(
          storage,
          `${dbs.REVIEWS_IMAGE}/${docId}/${image.name}`
        );

        const metadata = {
          contentType: 'image/jpeg',
        };
        const uploadTask = await uploadBytesResumable(
          imagesFolderRef,
          image,
          metadata
        );

        const snapshot = await uploadTask;

        // Get the download URL of the uploaded image
        const downloadURL = await getDownloadURL(imagesFolderRef);

        await updateDoc(reviewDocRef, {
          image: downloadURL,
        });
      }
      await updateDoc(projectDocRef, {
        clientsReview: true,
        reviewRefID: docId,
      });

      setIsDone(true);

      setIsDone(false);
      setShouldReload(true); // Set shouldReload to trigger the reload
      setSelectedImage(false);
    } catch (error) {
      setIsSubmitting(false);
      setIsLoading(false);
      setIsFailed(true);
      console.log(error);
      setTimeout(() => {
        // Code to be executed after the timeout
        setIsFailed(false);
      }, 2000);
    }

    // show message

    // messageRef.current.innerText =
    //   'Your Message has been successfully sent. I will contact you soon.';

    // Reset the values
  };

  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  const countryOptions = Country.getAllCountries().map((c) => ({
    value: c.name, // Use country name as the value
    label: c.name,
  }));

  const onBrowseAnotherProject = async () => {
    try {
      await auth.signOut();
      useAuth.logOut();
      router.push('/projectPass');
    } catch (error) {
      console.log(error);
      // Handle logout error if needed
    }
  };

  React.useEffect(() => {
    if (shouldReload) {
      setShouldReload(false); // Reset the flag
      router.reload(); // Reload the page
    }
  }, [shouldReload]);

  return (
    <section className='contact section-padding'>
      {isLoading && <Loader />}
      {isDone && <Done />}
      {isFailed && <Failed />}
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
                {project?.projectName}
              </h2>
              <p className='wow mb-10' data-splitting>
                Click the button below to get your Project
              </p>
              <div className='item mb-40'>
                <button
                  type='submit'
                  className='butn bord'
                  style={{
                    backgroundColor: '#5cb85c',
                    height: '80px',
                    cursor: 'pointer',
                  }}
                  onClick={handleGetProjectClick}
                >
                  <span>Get Project </span>
                  <i className='ion-ios-cloud-download-outline ml-3 fa-lg' />
                </button>
              </div>
              <button
                type='button'
                className='butn bord bg-info m-1'
                style={{ cursor: 'pointer' }}
                onClick={onBrowseAnotherProject}
              >
                <i className='ion-ios-world-outline mr-2 fa-lg' />
                Browse Another Project
              </button>
            </div>
          </div>

          {/* --------- Review --------- */}

          <div className='col-lg-6 offset-lg-1'>
            <div className='form md-mb50'>
              {/* ---------------------- Review Form ---------------- */}
              {project?.clientsReview && (
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
              {!project?.clientsReview && (
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
                    onSubmit={handleReviewSubmit}
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
                            <div className='image-preview'>
                              {selectedImage ? (
                                <Image
                                  src={selectedImage}
                                  alt='Full Stack developer Rajib hossain Prejon'
                                  height={200}
                                  width={200}
                                />
                              ) : (
                                <Image
                                  src='/img/upload-photo-200x200.png'
                                  alt='rajibhossainprejon.com software engineer'
                                  height={200}
                                  width={200}
                                />
                              )}
                            </div>

                            {!selectedImage && (
                              <button
                                type='button'
                                className='butn bord bg-success m-1'
                                onClick={() => fileInputRef.current.click()}
                              >
                                <i className='ion-ios-cloud-upload-outline mr-2 fa-lg' />
                                Upload Image
                              </button>
                            )}
                            {selectedImage && (
                              <button
                                type='button'
                                className={`butn bord mx-3 my-2 bg-danger ${
                                  selectedImage ? '' : 'hidden'
                                }`}
                                onClick={() => {
                                  setSelectedImage(null);
                                  setFieldValue('image', null);
                                }}
                              >
                                <i className='ion-ios-close-circle-outline mr-2 fa-lg' />
                                Delete Image
                              </button>
                            )}
                            <input
                              type='file'
                              id='form_image'
                              name='image'
                              accept='image/*'
                              onChange={(event) => {
                                const file = event.target.files[0];
                                setFieldValue('image', file);

                                if (file) {
                                  setSelectedImage(URL.createObjectURL(file));
                                } else {
                                  setSelectedImage(null); // Clear selected image when no file is selected
                                }
                              }}
                              ref={fileInputRef}
                              style={{ display: 'none' }}
                            />
                          </div>

                          {/* ----- Image end ---------------- */}

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

                        <button
                          type='submit'
                          className={`nb butn bord ${
                            isSubmitting ? 'bg-dark' : 'bg-success'
                          } curve mt-30`}
                          disabled={isSubmitting}
                        >
                          <span>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                          </span>
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
