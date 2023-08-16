import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import DarkTheme from '../../layouts/Dark';

import { useRouter } from 'next/router';
import CallToAction from '../../components/Call-to-action/call-to-action';
import Loader from '../../components/Loader/loader';
import ProjectPassForm from '../../components/project-pass-form/project-pass-form';
import useAuth from '../../context/AuthContext/useAuth';
const ProjectPass = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const router = useRouter();

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

  const restoreUser = async () => {
    const data = useAuth.getUser();

    if (data) {
      router.push(`/project-hub/${data.user_id}`);
    }
  };

  React.useEffect(() => {
    // Code to be executed after the timeout
    setIsLoading(true);

    restoreUser();
    setIsLoading(false);
  }, []);

  return (
    <DarkTheme>
      {isLoading && <Loader />}
      <div className='circle-bg'>
        <div className='circle-color fixed'>
          <div className='gradient-circle'></div>
          <div className='gradient-circle two'></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />

      <div ref={MainContent} className='main-content'>
        {/* ----------------- Form -------------- */}

        <ProjectPassForm noLine />
        <CallToAction />
        {/* ------ End ---------------- */}
      </div>
    </DarkTheme>
  );
};

export default ProjectPass;
