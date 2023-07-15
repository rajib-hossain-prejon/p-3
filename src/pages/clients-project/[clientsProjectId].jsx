/* eslint-disable @next/next/no-sync-scripts */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ClientProjectForms from '../../components/Client-project-forms/client-project-forms';
import ClientsProjectHeader from '../../components/Clients-project-header/clients-project-header';
import Navbar from '../../components/Navbar/navbar';
import ProjectNotFound from '../../components/Project-not-found/project-not-found';
import ClientsProjectData from '../../data/clients-project.json';
import DarkTheme from '../../layouts/Dark';

import { Field, Form, Formik } from 'formik';

const ClientsProject = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const messageRef = React.useRef(null);
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  const [productUniqueID, setProductUniqueID] = useState('');
  const [productSubmittedPassword, setProductSubmittedPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clientsProject, setClientsProject] = useState(undefined);

  const router = useRouter();
  const id = router.query.clientsProjectId;
  if (typeof window !== 'undefined') {
    localStorage.setItem('projectUniqueId', id);
  }

  // const clientsProject = ClientsProjectData.find(
  //   (project) => project.unique_id === id
  // );

  // -------------------- LocalStorage Start ------------------
  useEffect(() => {
    let storedProjectUniqueId, storedProjectPassword;
    if (typeof window !== 'undefined') {
      storedProjectUniqueId = localStorage.getItem('projectUniqueId');
      storedProjectPassword = localStorage.getItem('projectPassword');
    }

    if (
      clientsProject &&
      storedProjectUniqueId === id &&
      storedProjectPassword === clientsProject.password
    ) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [id, clientsProject]);

  useEffect(() => {
    const project = ClientsProjectData.find(
      (project) => project.unique_id === id
    );
    setClientsProject(project);
  }, [id]);
  const handleSubmitYou = (password) => {
    let storedProjectUniqueId2;
    if (typeof window !== 'undefined') {
      localStorage.setItem('projectPassword', password);
      storedProjectUniqueId2 = localStorage.getItem('projectUniqueId');
    }

    if (storedProjectUniqueId2 === id && password === clientsProject.password) {
      setIsAuthenticated(true);
    } else {
      window.alert('Password Incorrect!');
    }
  };
  // -------------------- LocalStorage End ------------------

  React.useEffect(() => {
    document.querySelector('body').classList.add('contact-page');

    if (navbarRef && navbarRef.current) {
      var navbar = navbarRef.current,
        logo = logoRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add('nav-scroll');
        } else {
          navbar.classList.remove('nav-scroll');
        }
      });
    }

    return () => {
      document.querySelector('body').classList.remove('contact-page');
    };
  }, [navbarRef]);

  if (typeof clientsProject === 'undefined') {
    return <>{/* <h1>Loooadding.....</h1> */}</>;
  }

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ClientsProjectHeader />

      {!clientsProject ? (
        <ProjectNotFound></ProjectNotFound>
      ) : isAuthenticated ? (
        <div className='main-content'>
          <ClientProjectForms clientsProject={clientsProject} />
        </div>
      ) : (
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
      )}
    </DarkTheme>
  );
};

export default ClientsProject;
