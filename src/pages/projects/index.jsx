import React from 'react';
import dbs from '../../api/dbs';
import getData from '../../api/getData';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import WorksHeader from '../../components/Works-header/works-header';
import WorksStyle2 from '../../components/Works-style2/works-style2';
import DarkTheme from '../../layouts/Dark';

export async function getStaticProps() {
  try {
    const projects = await getData.getListingsFromFirebase(dbs.PROJECTS);

    return {
      props: {
        projects,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const WorksDark = ({ projects, error }) => {
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
      <WorksHeader sliderRef={fixedHeader} />
      <div ref={MainContent} className='main-content'>
        <WorksStyle2 grid={3} projects={projects} filterPosition='center' />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default WorksDark;
