/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import initIsotope from '../../common/initIsotope';

const WorksStyle3 = ({ projectsOfLower, projectsOfMiddleTwo }) => {
  const router = useRouter();

  function sendProps(selectedProject) {
    router.push(`/project-details2/${selectedProject.projectRef}`);
  }

  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 10);
  }, []);
  return (
    <section className='portfolio-cr section-padding pb-50'>
      <div className='container'>
        <div className='row'>
          <div className='filtering text-center col-12'>
            <div className='filter'>
              <span data-filter='*' className='active'>
                All
              </span>

              <span data-filter='.web'>Web</span>
              <span data-filter='.mobile'>Mobile App</span>
              <a
                style={{
                  color: 'orange',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={() => router.push('/projects')}
              >
                More
              </a>
            </div>
          </div>

          <div className='gallery-mons full-width'>
            {projectsOfMiddleTwo &&
              projectsOfMiddleTwo?.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.resolution === '800*800' && (
                      <>
                        <div
                          className={`items ${item.className} brand wow fadeInUp`}
                          data-wow-delay='.4s'
                          style={{ cursor: 'pointer' }}
                        >
                          <div className='item-img'>
                            <a
                              className='imago wow'
                              onClick={() => sendProps(item)}
                            >
                              <Image
                                src={item.img}
                                alt='image'
                                height={800}
                                width={800}
                              />
                              <div className='item-img-overlay'></div>
                            </a>
                          </div>
                          <div className='cont flex'>
                            <h6 className='color-font'>{item.title}</h6>
                            <span>
                              <a href='#0'>{item.category}</a>
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                    {item.resolution === '800*400' && (
                      <>
                        <div
                          className={`items ${item.className} brand wow fadeInUp`}
                          data-wow-delay='.4s'
                          style={{ cursor: 'pointer' }}
                        >
                          <div className='item-img'>
                            <a
                              className='imago wow'
                              onClick={() => sendProps(item)}
                            >
                              <Image
                                src={item.img}
                                alt='image'
                                height={400}
                                width={800}
                              />
                              <div className='item-img-overlay'></div>
                            </a>
                          </div>
                          <div className='cont flex'>
                            <h6 className='color-font'>{item.title}</h6>
                            <span>
                              <a href='#0'>{item.category}</a>
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </React.Fragment>
                );
              })}

            {/* <div className='items graphic wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src={item.img} alt='image' />
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

            {/* <div className='items web brand wow fadeInUp' data-wow-delay='.4s'>
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/cr/2.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont flex'>
                <h6 className='color-font'>Modern Design</h6>
                <span>
                  <a href='#0'>Brand</a>, <a href='#0'>Web</a>
                </span>
              </div>
            </div> */}

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

            {projectsOfLower &&
              projectsOfLower?.map((project, index) => {
                return (
                  <div
                    className={`items width2 ${project.className} wow fadeInUp`}
                    data-wow-delay='.4s'
                    style={{ cursor: 'pointer' }}
                    key={index}
                  >
                    <div className='item-img'>
                      <a
                        className='imago wow'
                        onClick={() => sendProps(project)}
                      >
                        <Image
                          src={project.img}
                          alt='image'
                          width={500}
                          height={470}
                          priority={true}
                        />

                        <div className='item-img-overlay'></div>
                      </a>
                    </div>
                    <div className='cont'>
                      <h6 className='color-font'>{project.title}</h6>
                      <span>
                        <a href='#0'>{project.category}</a>
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
