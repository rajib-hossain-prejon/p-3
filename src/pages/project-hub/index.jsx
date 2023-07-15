import React from 'react';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import ProjectHubHeader from '../../components/Project-hub-header/project-hub-header';
import DarkTheme from '../../layouts/Dark';

import ClientProjectForms from '../../components/Client-project-forms/client-project-forms';
import ProjectNotFound from '../../components/Project-not-found/project-not-found';

const clientsProject = {
  Id: 1,
  title: 'Project A',
  unique_id: 'PA-001',
  password: 'PA-001',
  project_link: 'https://example.com/projects/PA-001',
  customer: 'John Smith',
  platform: 'Upwork',
  agreement_details: 'https://example.com/agreements/upwork/john-smith',
  review: 'Excellent',
  review_submitted: false,
};

const index = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px';
      }
    }, 1000);
    var navbar = navbarRef.current;
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
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <div className='circle-bg'>
        <div className='circle-color fixed'>
          <div className='gradient-circle'></div>
          <div className='gradient-circle two'></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ProjectHubHeader sliderRef={fixedHeader} />
      <div ref={MainContent} className='main-content'>
        {/* ----------------- Form -------------- */}

        {/* <SubmitPassword /> */}
        <ClientProjectForms clientsProject={clientsProject} />
        <ProjectNotFound />

        {/* ------ End ---------------- */}

        <Footer />
      </div>
    </DarkTheme>
  );
};

export default index;
