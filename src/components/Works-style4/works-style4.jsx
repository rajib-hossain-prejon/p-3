/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import initIsotope from '../../common/initIsotope';

import Image from 'next/image';
import projectsData from '../../data/sections/projects.json';

const WorksStyle4 = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className='portfolio-frl section-padding pb-70' id='projects'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10'>
            <div className='sec-head  text-center'>
              <h6 className='wow fadeIn' data-wow-delay='.5s'>
                Portfolio
              </h6>
              <h3 className='wow color-font'>My Recent Projects</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='filtering col-12'>
            <div className='filter wow fadeIn' data-wow-delay='.5s'>
              <span data-filter='*' className='active'>
                All
              </span>
              {/* <span data-filter='.brand'>Branding</span> */}
              <span data-filter='.web'>Web App</span>
              <span data-filter='.mobile'>Mobile App</span>
            </div>
          </div>

          <div className='gallery full-width'>
            {projectsData &&
              projectsData.map((data) => (
                <>
                  <div
                    className='col-md-6 items graphic lg-mr wow fadeInUp'
                    data-wow-delay='.4s'
                  >
                    <div className='item-img'>
                      <div className='cont'>
                        <h6>{data.title}</h6>
                        <p>{data.subtitle}</p>
                      </div>
                      {/* <Link href={`/project-details2/project-details2-dark`}> */}

                      {/* ---------------- Images Condition Starts --------------------------- */}

                      {data.no_livelink ? (
                        data.source_code_btn ? (
                          <>
                            <a
                              className='rota'
                              onClick={() =>
                                window.open(data.live_link, '_blank')
                              }
                            >
                              {/* <img src={data.img} alt='image' /> */}
                              <Image
                                src={data.img}
                                alt='rajib hossain prejon projects'
                                width='800'
                                height='600'
                                priority
                              ></Image>
                              <div className='item-img-overlay'></div>
                            </a>
                          </>
                        ) : (
                          <>
                            {' '}
                            <a
                              className='rota'
                              onClick={() => router.push(data.live_link)}
                            >
                              {/* <img src={data.img} alt='image' /> */}
                              <Image
                                src={data.img}
                                alt='rajib hossain prejon projects'
                                width='800'
                                height='600'
                                priority
                              ></Image>
                              <div className='item-img-overlay'></div>
                            </a>
                          </>
                        )
                      ) : (
                        <>
                          {' '}
                          <a
                            className='rota'
                            onClick={() =>
                              window.open(data.live_link, '_blank')
                            }
                          >
                            {/* <img src={data.img} alt='image' /> */}
                            <Image
                              src={data.img}
                              alt='rajib hossain prejon projects'
                              width='800'
                              height='600'
                              priority
                            ></Image>
                            <div className='item-img-overlay'></div>
                          </a>
                        </>
                      )}

                      {/* ---------------- Images Condition End --------------------------- */}

                      {/* </Link> */}
                      <div className='tags'>
                        {data.no_livelink ? (
                          data.source_code_btn ? (
                            <>
                              <span
                                style={{
                                  display: 'inline-block',
                                  backgroundColor: '#059AA6',
                                  color: '#fff',
                                  padding: '10px 20px',
                                  borderRadius: '5px',
                                }}
                              >
                                <a
                                  onClick={() =>
                                    window.open(data.live_link, '_blank')
                                  }
                                  style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                  }}
                                >
                                  Source Code
                                </a>
                              </span>
                            </>
                          ) : (
                            <>
                              <span
                                style={{
                                  display: 'inline-block',
                                  backgroundColor: '#059AA6',
                                  color: '#fff',
                                  padding: '10px 20px',
                                  borderRadius: '5px',
                                }}
                              >
                                <a
                                  onClick={() => router.push(data.live_link)}
                                  style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                  }}
                                >
                                  See demo
                                </a>
                              </span>
                            </>
                          )
                        ) : (
                          <>
                            <span
                              style={{
                                display: 'inline-block',
                                backgroundColor: '#059AA6',
                                color: '#fff',
                                padding: '10px 20px',
                                borderRadius: '5px',
                              }}
                            >
                              <a
                                onClick={() =>
                                  window.open(data.live_link, '_blank')
                                }
                                style={{
                                  color: '#fff',
                                  textDecoration: 'none',
                                }}
                              >
                                See demo
                              </a>
                            </span>
                          </>
                        )}

                        {/* <span>
                          <Link href={data.source_code}>
                            <a target='_blank' rel='noopener noreferrer'>
                              Source Code
                            </a>
                          </Link>
                        </span> */}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            {/* {projectsData.map((data) => {
             <div
               className='col-md-6 items graphic lg-mr wow fadeInUp'
               data-wow-delay='.4s'
             >
               <div className='item-img'>
                 <div className='cont'>
                   <h6>Creative Mobile App</h6>
                   <p>Ui / Ux creative mobile app design</p>
                 </div>
                 <Link href={`/project-details2/project-details2-dark`}>
                   <a className='rota'>
                     <img
                       src='/img/portfolio/freelancer/ecommerce1.jpg'
                       alt='image'
                     />
                     <div className='item-img-overlay'></div>
                   </a>
                 </Link>
                 <div className='tags'>
                   <span>
                     <Link href='https://ssebowa.org'>
                       <a target='_blank' rel='noopener noreferrer'>
                         Live Link
                       </a>
                     </Link>
                   </span>
                   <span>
                     <Link href='https://github.com'>
                       <a target='_blank' rel='noopener noreferrer'>
                         Source Code
                       </a>
                     </Link>
                   </span>
                  
                 </div>
               </div>
             </div>;
            })} */}

            {/* -------------------- Card --------------------- */}

            {/* <div
              className='col-md-6 items web graphic wow fadeInUp'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <div className='cont'>
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='rota'>
                    <img src='/img/portfolio/freelancer/4.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
                <div className='tags'>
                  <span>
                    <Link href='/works2/works2-dark'>App</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Fitnes</Link>
                  </span>
                  <span>
                    <Link href='/works2/works2-dark'>Creative</Link>
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
