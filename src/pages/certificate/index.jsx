import React from 'react';
import BlogDetails from '../../components/Blog-details/blog-details';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Navbar/navbar';
import PageHeader from '../../components/Page-header/page-header';
import DarkTheme from '../../layouts/Dark';

const CertificateDetailsDark = () => {
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
      <div className='circle-bg'>
        <div className='circle-color fixed'>
          <div className='gradient-circle'></div>
          <div className='gradient-circle two'></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title='Certificate Details'
        paragraph='All the most current news and events of our creative team.'
      />
      <BlogDetails blog={'blog'} />
      <Footer />
    </DarkTheme>
  );
};

export default CertificateDetailsDark;
