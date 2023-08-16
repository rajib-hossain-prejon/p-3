import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import ProjectHubHeader from '../../components/Project-hub-header/project-hub-header';
import DarkTheme from '../../layouts/Dark';

import { useRouter } from 'next/router';

import dbs from '../../api/dbs';
import getData from '../../api/getData';
import ClientProjectForms from '../../components/Client-project-forms/client-project-forms';
import useAuth from '../../context/AuthContext/useAuth';
import { AuthContext } from '../../context/UserAuthContext';

export async function getStaticPaths() {
  const projects = await getData.getListingsFromFirebase(dbs.PROJECT_HUB);

  const paths = projects.map((project) => {
    const clientsProjectId = project.id.toString();

    return {
      params: { clientsProjectId: clientsProjectId },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.clientsProjectId;

  function convertReviewRefToText(reviewRef) {
    const parts = reviewRef.split('/');
    const text = parts[1] || '';
    return text;
  }

  try {
    const project = await getData.getListingByIdFromFirebase(
      dbs.PROJECT_HUB,
      projectId
    );

    return {
      props: {
        project,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const ClientsProject = ({ project, error }) => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const authContext = React.useContext(AuthContext);
  const router = useRouter();

  const restoreUser = async () => {
    const data = useAuth.getUser();

    if (!data) {
      router.push(`/projectPass`);
    }
  };

  React.useEffect(() => {
    restoreUser();
  }, []);

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
        <ClientProjectForms project={project} />
        {/* <ProjectNotFound /> */}

        {/* ------ End ---------------- */}
      </div>
    </DarkTheme>
  );
};

export default ClientsProject;
