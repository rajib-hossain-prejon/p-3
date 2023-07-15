/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import initIsotope from '../../common/initIsotope';

import ProjectDataLower6 from '../../data/homeProjectLower6.json';
import ProjectDataMiddle2 from '../../data/homeProjectMiddle2.json';
import ProjectDataUpper4 from '../../data/homeProjectUpper4.json';

import { shuffle } from 'lodash';
import Image from 'next/image';

const WorksStyle3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className='portfolio-cr section-padding pb-50'>
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

      <div className='container'>
        <div className='row'>
          <div className='filtering text-center col-12'>
            <div className='filter'>
              <span data-filter='*' className='active'>
                All Kinds
              </span>
              <span data-filter='.web'>Web</span>
              <span data-filter='.mobile'>Mobile App</span>
              <span data-filter='.dms'>Digital Marketing & Seo</span>
            </div>
          </div>

          <div className='gallery-mons full-width'>
            {/* --------- Resolution: 500 * 470 (4 photos)------------------  */}

            {/* <div
              className='items width2 brand wow fadeInUp'
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/cr/3.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont'>
                <h6 className='color-font'>Creative Design</h6>
                <span>
                  <a href='#0'>Website</a>
                </span>
              </div>
            </div> */}
            {/* --------- Resolution: 800 * 800 (1 photo)------------------  */}
            {/* <div className='items graphic wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img
                      src='https://res.cloudinary.com/drrlu7qrl/image/upload/f_auto,q_auto,w_800,h_400,c_scale/v1677742321/futureflowit.com/projects/projects-800%2A400/imx_2_t236mt.png'
                      alt='image'
                    />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont flex'>
                <h6 className='color-font'>Creative Design</h6>
                <span>
                  <a href='#0'>Graphic</a>
                </span>
              </div>
            </div> */}

            {/* --------- Resolution: 500 * 470 (4 photos)------------------  */}
            {ProjectDataUpper4 &&
              shuffle(ProjectDataUpper4).map((project) => {
                return (
                  <React.Fragment key={project.id}>
                    {project.resolution !== '500*470' ? (
                      <div
                        className={`items  ${project.className} wow fadeInUp`}
                        data-wow-delay='.4s'
                        key={project.id}
                      >
                        <div className='item-img'>
                          <Link href={project.link}>
                            <a className='imago wow'>
                              <Image
                                src={project.img}
                                alt='the upper 4 project image'
                                width='500'
                                height='470'
                                priority
                              />
                              <div className='item-img-overlay'></div>
                            </a>
                          </Link>
                        </div>
                        <div className='cont'>
                          <h6 className='color-font'>{project.title}</h6>
                          <span>
                            <a href='#0'>{project.category}</a>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`items width2 ${project.className} wow fadeInUp`}
                        data-wow-delay='.4s'
                        key={project.id}
                      >
                        <div className='item-img'>
                          <Link href={project.link}>
                            <a className='imago wow'>
                              <Image
                                src={project.img}
                                alt='the upper 4 project image'
                                width='500'
                                height='470'
                                priority
                              />
                              <div className='item-img-overlay'></div>
                            </a>
                          </Link>
                        </div>
                        <div className='cont'>
                          <h6 className='color-font'>{project.title}</h6>
                          <span>
                            <a href='#0'>{project.category}</a>
                          </span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

            {/* --------- Resolution: 800 * 400 and 800*800 (2 photos)------------------  */}
            {ProjectDataMiddle2 &&
              ProjectDataMiddle2.map((project) => {
                return (
                  <React.Fragment key={project.id}>
                    <div
                      className={`items  ${project.className} wow fadeInUp`}
                      data-wow-delay='.4s'
                      key={project.id}
                    >
                      <div className='item-img'>
                        <Link href={project.link}>
                          <a className='imago wow'>
                            {project.resolution === '800*400' ? (
                              <>
                                {' '}
                                <Image
                                  src={project.img}
                                  alt='the middle 2 homepage project image'
                                  height='400'
                                  width='800'
                                  priority
                                />
                              </>
                            ) : (
                              <>
                                {' '}
                                <Image
                                  src={project.img}
                                  alt='the middle 2 homepage project image'
                                  height='800'
                                  width='800'
                                  priority
                                />
                              </>
                            )}

                            <div className='item-img-overlay'></div>
                          </a>
                        </Link>
                      </div>
                      <div className='cont'>
                        <h6 className='color-font'>{project.title}</h6>
                        <span>
                          <a href='#0'>{project.category}</a>
                        </span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}

            {/* --------- Resolution: 500 * 470 (6 photos)------------------  */}
            {ProjectDataLower6 &&
              shuffle(ProjectDataLower6)
                .slice(0, 6)
                .map((project) => {
                  return (
                    <React.Fragment key={project.id}>
                      {project.resolution !== '500*470' ? (
                        <div
                          className={`items  ${project.className} wow fadeInUp`}
                          data-wow-delay='.4s'
                          key={project.id}
                        >
                          <div className='item-img'>
                            <Link href={project.link}>
                              <a className='imago wow'>
                                <Image
                                  src={project.img}
                                  alt='the lower 6 project image'
                                  width='500'
                                  height='470'
                                  priority
                                />
                                <div className='item-img-overlay'></div>
                              </a>
                            </Link>
                          </div>
                          <div className='cont'>
                            <h6 className='color-font'>{project.title}</h6>
                            <span>
                              <a href='#0'>{project.category}</a>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`items width2 ${project.className} wow fadeInUp`}
                          data-wow-delay='.4s'
                          key={project.id}
                        >
                          <div className='item-img'>
                            <Link href={project.link}>
                              <a className='imago wow'>
                                <Image
                                  src={project.img}
                                  alt='the lower 6 project image'
                                  width='500'
                                  height='470'
                                  priority
                                />
                                <div className='item-img-overlay'></div>
                              </a>
                            </Link>
                          </div>
                          <div className='cont'>
                            <h6 className='color-font'>{project.title}</h6>
                            <span>
                              <a href='#0'>{project.category}</a>
                            </span>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
