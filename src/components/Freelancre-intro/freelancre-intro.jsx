/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';

const FreelancreIntro = ({ propsInfo }) => {
  const { info, heroImage, name, skills, contactInfo, email } = propsInfo || {};

  return (
    <header className='freelancre valign'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='img'>
              {heroImage && (
                <Image
                  src={heroImage}
                  alt='Rajib Hossain Prejon Full Stack Web and Moblile App Developer 1000x1150'
                  layout='fill'
                  priority
                />
              )}
            </div>
          </div>
          {/* I have deleted className='valign' */}
          <div className='col-lg-8 '>
            <div className='cont'>
              <div>
                {name && <h3 className='cd-headline clip'>{name.label}</h3>}
              </div>
              <br />
              <div>
                <h1
                  style={{ fontSize: '32px', lineHeight: '38px' }}
                  className='cd-words-wrapper'
                >
                  {name && name.title && (
                    <Typewriter
                      options={{
                        wrapperClassName: 'color-font-2 fw-600',
                        strings: [name.title],
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                      onInit={(typewriter) => {
                        typewriter;
                      }}
                    />
                  )}
                </h1>
              </div>
              <br />
              {skills && (
                <div style={{ fontSize: '20px', lineHeight: '55px' }}>
                  {skills.label}
                </div>
              )}

              <div>
                <h1
                  style={{ fontSize: '30px', lineHeight: '35px' }}
                  className='cd-words-wrapper'
                >
                  {skills && (
                    <Typewriter
                      options={{
                        wrapperClassName: 'color-font fw-400',
                        strings: skills.titles,
                        autoStart: true,
                        loop: true,
                      }}
                      loop={true}
                      onInit={(typewriter) => {
                        typewriter;
                      }}
                    />
                  )}
                </h1>
              </div>
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
                    {contactInfo &&
                      contactInfo?.map((social, index) => {
                        return (
                          <React.Fragment key={index}>
                            <a
                              onClick={() => window.open(social.link, '_blank')}
                            >
                              <i className={`fab ${social.icon} mx-4`}></i>
                            </a>
                          </React.Fragment>
                        );
                      })}

                    {/* <a
                      onClick={() =>
                        window.open('https://wa.me/+8801518647550', '_blank')
                      }
                    >
                      <i className='fab fa-whatsapp mx-4'></i>
                    </a> */}
                  </div>
                </div>
              </li>

              <li className='mail-us'>
                <a href={`mailto:${email}?subject=I want to have an App`}>
                  <div className='flex'>
                    <div className='text valign'>
                      <div className='full-width'>
                        <p>Get In Touch</p>
                        <h6>{email}</h6>
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
