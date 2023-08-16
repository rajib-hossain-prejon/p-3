/* eslint-disable @next/next/no-img-element */
import React from 'react';

import Image from 'next/image';

const ProjectGallery = ({ projectGalleryData }) => {
  return (
    <section className='projdtal'>
      <div className='popup-img'>
        <div className='row'>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt={projectGalleryData.imageOne.alt}
              src={projectGalleryData.imageOne.src}
              height='600'
              width='600'
              priority
            />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt={projectGalleryData.imageTwo.alt}
              src={projectGalleryData.imageTwo.src}
              height='600'
              width='600'
              priority
            />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt={projectGalleryData.imageThree.alt}
              src={projectGalleryData.imageThree.src}
              height='600'
              width='600'
              priority
            />
          </a>
          <a href='#' className='col-md-3 popimg'>
            <Image
              alt={projectGalleryData.imageFour.alt}
              src={projectGalleryData.imageFour.src}
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
