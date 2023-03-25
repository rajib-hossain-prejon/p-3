/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ProjectGallery = ({ projectGalleryData }) => {
  console.log(projectGalleryData[0]);

  return (
    <section className='projdtal'>
      <div className='popup-img'>
        <div className='row'>
          <a href='#' className='col-md-3 popimg'>
            <img alt='' src={projectGalleryData[0]} />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <img alt='' src={projectGalleryData[1]} />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <img alt='' src={projectGalleryData[2]} />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <img alt='' src={projectGalleryData[3]} />
          </a>

          {/* <a href='#' className='col-md-12 popimg'>
            <img alt='' src='/img/portfolio/project2/7.jpg' />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
