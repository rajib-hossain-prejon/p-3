/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

import { useRouter } from 'next/router';
import React from 'react';
import initIsotope from '../../common/initIsotope';

import { shuffle } from 'lodash';

const WorksStyle2 = ({ grid, projects, hideFilter, filterPosition }) => {
  const router = useRouter();

  function sendProps(selectedProject) {
    router.push(`/project-details2/${selectedProject.id}`);
  }

  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? 'three-column' : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-10'>
              <div className='sec-head text-center'>
                <h6 className='wow fadeIn' data-wow-delay='.5s'>
                  Portfolio
                </h6>
                <h3 className='wow color-font'>
                  Our Recent &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={'container'}>
        <div className='row'>
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === 'center'
                  ? 'text-center'
                  : filterPosition === 'left'
                  ? 'text-left'
                  : 'text-right'
              } col-12`}
            >
              <div className='filter'>
                <span data-filter='*' className='active'>
                  All
                </span>
                <span data-filter='.web'>Web</span>
                <span data-filter='.mobile'>Mobile App</span>
              </div>
            </div>
          )}

          <div className='gallery full-width'>
            {projects &&
              shuffle(projects).map((project, index) => {
                return (
                  <div
                    className={`${
                      grid === 3
                        ? 'col-lg-4 col-md-6'
                        : grid === 2
                        ? 'col-md-6'
                        : 'col-12'
                    } items ${project.className} wow fadeInUp`}
                    data-wow-delay='.4s'
                    key={index}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className='item-img'>
                      <a
                        className='imago wow'
                        onClick={() => sendProps(project)}
                      >
                        <Image
                          src={project.imageProjectPageCover.src}
                          alt={project.imageProjectPageCover.alt}
                          width={800}
                          height={1000}
                          priority
                        />
                        <div className='item-img-overlay'></div>
                      </a>
                    </div>
                    <div className='cont'>
                      <h6>{project.title}</h6>
                      <span>{project.category}</span>
                    </div>
                  </div>
                );
              })}
            {/* <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items web wow fadeInUp`}
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/portfolio/1/2.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont'>
                <h6>Through The Breaking</h6>
                <span>
                  <Link href='/works3/works3-dark'>Design</Link>,
                  <Link href='/works3/works3-dark'>WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`}
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/portfolio/1/3.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont'>
                <h6>Create With Creatives</h6>
                <span>
                  <Link href='/works3/works3-dark'>Design</Link>,
                  <Link href='/works3/works3-dark'>WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items graphic wow fadeInUp`}
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/portfolio/1/4.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont'>
                <h6>Energies of Love</h6>
                <span>
                  <Link href='/works3/works3-dark'>Design</Link>,
                  <Link href='/works3/works3-dark'>WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items web wow fadeInUp`}
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/portfolio/1/5.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont'>
                <h6>See It Yourself</h6>
                <span>
                  <Link href='/works3/works3-dark'>Design</Link>,
                  <Link href='/works3/works3-dark'>WordPress</Link>
                </span>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? 'col-lg-4 col-md-6'
                  : grid === 2
                  ? 'col-md-6'
                  : 'col-12'
              } items brand wow fadeInUp`}
              data-wow-delay='.4s'
            >
              <div className='item-img'>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className='imago wow'>
                    <img src='/img/portfolio/portfolio/1/6.jpg' alt='image' />
                    <div className='item-img-overlay'></div>
                  </a>
                </Link>
              </div>
              <div className='cont'>
                <h6>Blast From The Past</h6>
                <span>
                  <Link href='/works3/works3-dark'>Design</Link>,
                  <Link href='/works3/works3-dark'>WordPress</Link>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
