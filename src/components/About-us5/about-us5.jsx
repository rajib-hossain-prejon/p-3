/* eslint-disable @next/next/no-img-element */
import React from 'react';
import aboutSkillsProgress from '../../common/aboutSkillsProgress';

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector('.about-cr .skills-box'),
      document.querySelectorAll('.skill-progress .progres'),
      document.querySelector('.about-cr')
    );
  }, []);
  return (
    <section className='about-cr' id='skills'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 img md-mb50'>
            <img
              src='https://res.cloudinary.com/dllxgj3ac/image/upload/v1676207050/rajibhossainprejon.com%28p3%29/homepage/me/prejon700_isjo5e.jpg'
              alt='Rajib Hossain Prejon Skills'
            />
          </div>
          <div className='col-lg-5 valign'>
            <div className='cont full-width'>
              <h3 className='color-font'>My Skills</h3>
              <h5 className='co-tit mb-15'>The Skills I use to build Apps</h5>
              {/* <p>
                We are Vie. We create award-winning websites, remarkable brands
                and cutting-edge apps.Nullam imperdie.
              </p> */}
              <div className='skills-box mt-40'>
                <div className='skill-item'>
                  <h5 className='fz-14 mb-15'>Next.js</h5>
                  <div className='skill-progress'>
                    <div className='progres' data-value='70%'></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <h5 className='fz-14 mb-15'>React</h5>
                  <div className='skill-progress'>
                    <div className='progres' data-value='90%'></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <h5 className='fz-14 mb-15'>React Native</h5>
                  <div className='skill-progress'>
                    <div className='progres' data-value='70%'></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <h5 className='fz-14 mb-15'>Django</h5>
                  <div className='skill-progress'>
                    <div className='progres' data-value='80%'></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <h5 className='fz-14 mb-15'>Redux</h5>
                  <div className='skill-progress'>
                    <div className='progres' data-value='80%'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
