/* eslint-disable @next/next/no-img-element */
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import initIsotope from '../../common/initIsotope';

const WorksStyle3 = ({ projectsOfLower }) => {
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
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
              <span data-filter='.brand'>Branding</span>
              <span data-filter='.web'>Mobile App</span>
              <span data-filter='.graphic'>Creative</span>
            </div>

            {projectsOfLower && (
              <ImageList variant='quilted' cols={4} rowHeight={200}>
                {projectsOfLower.map((item) => (
                  <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                    rows={item.rows || 1}
                  >
                    <img
                      {...srcset(item.img, 200, item.rows, item.cols)}
                      alt={item.title}
                      loading='lazy'
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
