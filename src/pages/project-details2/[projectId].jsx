import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import DarkTheme from '../../layouts/Dark';
import ProjectDetails2Header from '../../components/Project-details2-header/project-details2-header';
// import ProjectDate from '../../data/project-details2.json';
import ProjectDate1 from '../../data/projectDetaisFFI.json';
import ProjectIntroduction from '../../components/Project-introduction/project-introduction';
import ProjectGallery from '../../components/Project-gallery/project-gallery';
import ProjectDescription from '../../components/Project-description/project-description';
// import ProjectVideo from '../../components/Project-video/project-video';
// import NextProject from '../../components/Next-project/next-project';

import { useRouter } from 'next/router';
import ProjectNotFound from '../../components/Project-not-found/project-not-found';

const ProjectDetails2Dark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const router = useRouter();
  const id = router.query.projectId;

  // find the project with the matching id
  const ProjectDate = ProjectDate1.find((project) => project.unique_id === id);

  React.useEffect(() => {
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
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <div className='wrapper'>
        {!ProjectDate ? (
          <ProjectNotFound></ProjectNotFound>
        ) : (
          <>
            <ProjectDetails2Header projectHeaderData={ProjectDate} />

            <ProjectIntroduction projectIntroductionData={ProjectDate.intro} />
            <ProjectGallery projectGalleryData={ProjectDate.gallery} />
            <ProjectDescription
              projectDescriptionData={ProjectDate.description}
            />
          </>
        )}
        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject />  */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails2Dark;
