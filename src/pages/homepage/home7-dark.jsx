import React from 'react';
import Footer from '../../components/Footer/footer';
import FreelancreIntro from '../../components/Freelancre-intro/freelancre-intro';
import Navbar from '../../components/Navbar/navbar';
import Services5 from '../../components/Services5/services5';
import Testimonials from '../../components/Testimonials-arch/testimonials-arch';
// import WorksStyle4 from '../../components/Works-style4/works-style4';
import WorksStyle3 from '../../components/Works-style3/works-style3';

import SContactForm from '../../components/s-contact-form/s-contact-form';
import DarkTheme from '../../layouts/Dark';

const Homepage = ({
  info,
  projectsOfLower,
  projectsOfMiddleTwo,
  testimonials,
  servicesData,
}) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  }, [navbarRef]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState('');

  const handleButtonClick = () => {
    // Set the image URL and open the modal
    setImageUrl('/img/certificates/certificate-1.jpg');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro propsInfo={info} />

      <Services5 servicesData={servicesData} />

      {/* <WorksStyle4 projectsOfLower={projectsOfLower} /> */}

      <WorksStyle3
        projectsOfLower={projectsOfLower}
        projectsOfMiddleTwo={projectsOfMiddleTwo}
      />

      {/* <VideoWithTestimonials />
      <SkillsCircle2 /> */}

      {/* <AboutUs5  /> */}
      {/* <FullTestimonials showHead />
      <Blogs2 /> */}

      <Testimonials reviews={testimonials} />
      <SContactForm noLine />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage;
