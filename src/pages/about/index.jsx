import React from 'react';
import dbs from '../../api/dbs';
import getData from '../../api/getData';
import AboutIntro from '../../components/About-intro';
import CallToAction from '../../components/Call-to-action/call-to-action';
import Footer from '../../components/Footer/footer';
import MinimalArea from '../../components/Minimal-Area/minimal-area';
import Navbar from '../../components/Navbar/navbar';
import PagesHeader from '../../components/Pages-header';
import Services5 from '../../components/Services5/services5';
import ShowCase from '../../components/Showcases-full-screen/showcases-full-screen';
import SkillsCircle from '../../components/Skills-circle/skills-circle';
import TryAgain from '../../components/Try-Again/try-again';
import DarkTheme from '../../layouts/Dark';

export async function getStaticProps() {
  let skillsData = {},
    aboutInfoData = {},
    showcaseData = {},
    minimalData = {},
    servicesData = {};
  try {
    const aboutpageData = await getData.getListingsFromFirebase(dbs.ABOUTPAGE);
    const servicesServerData = await getData.getListingsFromFirebase(
      dbs.SERVICES
    );
    servicesData = servicesServerData[0];
    aboutpageData?.forEach((dataSet) => {
      if (dataSet.id === 'skills') {
        skillsData = dataSet || {};
      } else if (dataSet.id === 'aboutInfoData') {
        aboutInfoData = dataSet || {};
      } else if (dataSet.id === 'minimalData') {
        minimalData = dataSet || {};
      } else if (dataSet.id === 'showcaseData') {
        showcaseData = dataSet || {};
      }
    });

    return {
      props: {
        aboutpageData,
        servicesData,
        showcaseData,
        skillsData,
        aboutInfoData,
        minimalData,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return { props: { error: true }, revalidate: 3600 };
  }
}

const About = ({
  aboutpageData,
  showcaseData,
  servicesData,
  skillsData,
  aboutInfoData,
  minimalData,
  error,
}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
      <Navbar nr={navbarRef} lr={logoRef} from='about-dark' />
      <PagesHeader />
      <AboutIntro AboutInfo1Data={aboutInfoData} />
      {/* <Services style='4item' servicesData={servicesData} /> */}
      <Services5 servicesData={servicesData} />
      {/* <VideoWithTestimonials /> */}
      <MinimalArea minimalData={minimalData} />
      <SkillsCircle from='aboutPage' skills={skillsData} />
      <ShowCase showcaseData={showcaseData} />
      {/* <Team /> */}

      {/* <Clients theme="dark" />*/}
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
