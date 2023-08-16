import React from 'react';
import dbs from '../../api/dbs';
import getData from '../../api/getData';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import ProjectDescription from '../../components/Project-description/project-description';
import ProjectDetails2Header from '../../components/Project-details2-header/project-details2-header';
import ProjectGallery from '../../components/Project-gallery/project-gallery';
import ProjectIntroduction from '../../components/Project-introduction/project-introduction';
import TryAgain from '../../components/Try-Again/try-again';
import DarkTheme from '../../layouts/Dark';
// import ProjectVideo from '../../components/Project-video/project-video';
// import NextProject from '../../components/Next-project/next-project';

export async function getStaticPaths() {
  const projects = await getData.getListingsFromFirebase(dbs.PROJECTS);

  const paths = projects.map((project) => {
    const projectId = project.id.toString();

    return {
      params: { projectId: projectId },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const projectId = context.params.projectId;

  try {
    const project = await getData.getListingByIdFromFirebase(
      dbs.PROJECTS,
      projectId
    );

    return {
      props: {
        project: project,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const ProjectDetails = ({ project, error }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const {
    category,
    categories,
    clientURLName,
    clientURLLink,
    date,
    description,
    imageProjectDetailsHeader,
    imagesGallery,
    intro,
    subTitle,
    title,
    technologies,
    videoLink,
  } = project;

  const projectHeader = {
    category,
    categories,
    clientURLLink,
    clientURLName,
    date,
    imageProjectDetailsHeader,
    subTitle,
    title,
    technologies,
  };

  if (error) {
    return <TryAgain />;
  }

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
        <ProjectDetails2Header projectHeaderData={projectHeader} />

        <ProjectIntroduction projectIntroductionData={intro} />
        <ProjectGallery projectGalleryData={imagesGallery} />
        <ProjectDescription projectDescriptionData={description} />

        {/* <ProjectVideo projectVideoDate={ProjectDate} /> */}
        {/* <NextProject />  */}
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default ProjectDetails;
