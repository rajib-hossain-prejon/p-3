/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Image from 'next/image';

const ProjectGallery = ({ projectGalleryData }) => {
  console.log(projectGalleryData[0]);

  return (
    <section className='projdtal'>
      <div className='popup-img'>
        <div className='row'>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt='Rajib Hossain Prejon Dental Project image 1'
              src={projectGalleryData[0]}
              height='600'
              width='600'
              priority
            />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt='Rajib Hossain Prejon Dental Project image 2'
              src={projectGalleryData[1]}
              height='600'
              width='600'
              priority
            />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt='Rajib Hossain Prejon Dental Project image 2'
              src={projectGalleryData[2]}
              height='600'
              width='600'
              priority
            />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt='Rajib Hossain Prejon Dental Project image 3'
              src={projectGalleryData[3]}
              height='600'
              width='600'
              priority
            />
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
