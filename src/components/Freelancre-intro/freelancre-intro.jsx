/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Typewriter from 'typewriter-effect';

const FreelancreIntro = () => {
  return (
    <header className='freelancre valign'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='img'>
              <img
                style={{ zIndex: -5 }}
                src='https://res.cloudinary.com/dllxgj3ac/image/upload/v1676207050/rajibhossainprejon.com%28p3%29/homepage/me/prejon_lkzf2r.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-8 valign'>
            <div className='cont'>
              <h1 className='cd-headline clip'>
                Hello, My name is <br />
                <span
                  style={{ fontSize: '38px', lineHeight: '49px' }}
                  className='cd-words-wrapper'
                >
                  <Typewriter
                    options={{
                      wrapperClassName: 'color-font-2 fw-600',
                      strings: ['Rajib Hossain Prejon'],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
                <br />
                <span style={{ fontSize: '20px' }}>
                  I Love To Develop{' '}
                </span>{' '}
                <span> </span>
                <span
                  style={{ fontSize: '30px', lineHeight: '55px' }}
                  className='cd-words-wrapper'
                >
                  <Typewriter
                    options={{
                      wrapperClassName: 'color-font fw-400',
                      strings: [
                        'Web App',
                        'Android App',
                        'IOS APP',
                        'Frontend',
                        'Backend',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className='states'>
          <div className='container'>
            <ul className='flex'>
              {/* <li className='flex'>
                <div className='numb valign'>
                  <h3>12</h3>
                </div>
                <div className='text valign'>
                  <p>
                    Years <br /> Of Experience
                  </p>
                </div>
              </li> */}

              {/* <li className='flex'>
                <div className='numb valign'>
                  <h3>165</h3>
                </div>
                <div className='text valign'>
                  <p>
                    Projects Completed <br /> In 19 Countries
                  </p>
                </div>
              </li> */}

              <li className='flex m-5'>
                <div className='item mx-auto'>
                  <div className='social '>
                    <a
                      onClick={() =>
                        window.open(
                          'https://www.linkedin.com/in/rajib-hossain-prejon-089505202',
                          '_blank'
                        )
                      }
                    >
                      <i className='fab fa-linkedin mx-4'></i>
                    </a>
                    <a
                      onClick={() =>
                        window.open('https://wa.me/+8801518647550', '_blank')
                      }
                    >
                      <i className='fab fa-whatsapp mx-4'></i>
                    </a>
                    <a
                      onClick={() =>
                        window.open(
                          'https://github.com/rajib-hossain-prejon/',
                          '_blank'
                        )
                      }
                    >
                      <i className='fab fa-github mx-4'></i>
                    </a>
                  </div>
                </div>
              </li>

              <li className='mail-us'>
                <a href='mailto:rajibhossainprejon@gmail.com?subject=I want to have an App'>
                  <div className='flex'>
                    <div className='text valign'>
                      <div className='full-width'>
                        <p>Get In Touch</p>
                        <h6>rajibhossainprejon@gmail.com</h6>
                      </div>
                    </div>
                    <div className='mail-icon'>
                      <div className='icon-box'>
                        <span className='icon color-font pe-7s-mail'></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='line bottom left'></div>
    </header>
  );
};

export default FreelancreIntro;
