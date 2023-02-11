/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? 'sub-bg' : ''}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='item md-mb50'>
              <div className='title'>
                <h5>Contact Us</h5>
              </div>
              <ul>
                {/* <li>
                  <span className='icon pe-7s-map-marker'></span>
                  <div className='cont'>
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li> */}
                <li>
                  <span className='icon pe-7s-mail'></span>
                  <div className='cont'>
                    <h6>Email Me</h6>
                    <p>rajibhossainprejon@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className='icon pe-7s-call'></span>
                  <div className='cont'>
                    <h6>Call Me</h6>
                    <p>+8801518647550</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-4'>
            {/* <div className='item md-mb50'>
                <div className='title'>
                  <h5>Recent News</h5>
                </div>
                <ul>
                  <li>
                    <div className='img'>
                      <Link href='/blog-details/blog-details-dark'>
                        <a>
                          <img src='/img/blog/1.jpg' alt='' />
                        </a>
                      </Link>
                    </div>
                    <div className='sm-post'>
                      <Link href='/blog-details/blog-details-dark'>
                        <a>
                          <p>
                            The Start-Up Ultimate Guide to Make Your WordPress
                            Journal.
                          </p>
                        </a>
                      </Link>
                      <Link href='/blog/blog-dark'>
                        <a>
                          <span className='date'>14 sep 2022</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className='img'>
                      <Link href='/blog-details/blog-details-dark'>
                        <a>
                          <img src='/img/blog/2.jpg' alt='' />
                        </a>
                      </Link>
                    </div>
                    <div className='sm-post'>
                      <Link href='/blog-details/blog-details-dark'>
                        <a>
                          <p>
                            The Start-Up Ultimate Guide to Make Your WordPress
                            Journal.
                          </p>
                        </a>
                      </Link>
                      <Link href='/blog/blog-dark'>
                        <a>
                          <span className='date'>14 sep 2022</span>
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className='subscribe'>
                      <input type='text' placeholder='Type Your Email' />
                      <span className='subs pe-7s-paper-plane'></span>
                    </div>
                  </li>
                </ul>
              </div> */}
          </div>
          <div className='col-lg-4'>
            <div className='item'>
              <div className='logo'>
                <img src={appData.lightLogo} alt='' />
              </div>
              <div className='social'>
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
              <div className='copy-right'>
                <p>
                  © 2023, Made with passion by
                  <Link href='/'>
                    <a>Rajib Hossain Prejon</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
