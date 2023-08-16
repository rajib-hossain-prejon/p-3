import Link from 'next/link';
import React from 'react';

const ProjectDetails2Header = ({ projectHeaderData }) => {
  return (
    <section
      className='page-header proj-det bg-img parallaxie valign'
      style={{
        backgroundImage: `url('${projectHeaderData.imageProjectDetailsHeader.src}')`,
      }}
      data-overlay-dark='4'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7 col-md-9'>
            <div className='cont'>
              <h6>{projectHeaderData.subTitle}</h6>
              <h2>{projectHeaderData.title}</h2>
              <br />
              {projectHeaderData.clientURLLink && (
                <button
                  className='butn bord'
                  style={{ backgroundColor: '#08ec89', color: 'white' }}
                  onClick={() =>
                    window.open(projectHeaderData.clientURLLink, '_blank')
                  }
                >
                  <i className='fa fa-light fa-play mr-2'></i>
                  See Demo
                </button>
              )}
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='item mt-30'>
              <h6>Client</h6>
              <p>
                <Link href='#'>{projectHeaderData.clientURLName}</Link>
              </p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='item mt-30'>
              <h6>Date</h6>
              <p>{projectHeaderData.date}</p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='item mt-30'>
              <h6>Categories</h6>
              <p>
                {projectHeaderData.categories.map((cat, index) => (
                  <Link href={cat.link} key={index}>
                    <a>
                      {cat.title}
                      {projectHeaderData.categories.length != index + 1
                        ? ' ,'
                        : ''}
                    </a>
                  </Link>
                ))}
              </p>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='item mt-30'>
              <h6>Technology</h6>
              <p>
                {projectHeaderData.technologies.map((technology, index) => (
                  <Link href={technology.link} key={index}>
                    <a>
                      {technology.title}
                      {projectHeaderData.technologies.length != index + 1
                        ? ' ,'
                        : ''}
                    </a>
                  </Link>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2Header;
