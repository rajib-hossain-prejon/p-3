import React from 'react';
import AboutIntro from '../../components/About-intro';
import CallToAction from '../../components/Call-to-action/call-to-action';
import Footer from '../../components/Footer/footer';
import MinimalArea from '../../components/Minimal-Area/minimal-area';
import Navbar from '../../components/Navbar/navbar';
import PagesHeader from '../../components/Pages-header';
import Services from '../../components/Services/services';
import ShowCase from '../../components/Showcases-full-screen/showcases-full-screen';
import SkillsCircle from '../../components/Skills-circle/skills-circle';
import DarkTheme from '../../layouts/Dark';

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

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
      <AboutIntro />
      <Services style='4item' />
      {/* <VideoWithTestimonials /> */}
      <MinimalArea />
      <SkillsCircle from='aboutPage' />
      <ShowCase />
      {/* <Team /> */}

      {/* <Clients theme="dark" />*/}
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
