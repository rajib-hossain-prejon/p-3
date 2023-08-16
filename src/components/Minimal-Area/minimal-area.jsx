/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cardMouseEffect from '../../common/cardMouseEffect';
import { thumparallaxDown } from '../../common/thumparallax';

import Image from 'next/image';

const MinimalArea = ({ minimalData }) => {
  const { img, list, title, description } = minimalData;

  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll('.feat .items'));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className='min-area sub-bg'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='img'>
              <Image
                className='thumparallax-down'
                src={img?.link}
                alt={img?.alt}
                height='700'
                width='700'
                priority
              />
            </div>
          </div>
          <div className='col-lg-6 valign'>
            <div className='content pt-0' style={{ marginTop: '-50px' }}>
              <h4 className='wow color-font'>{title}</h4>
              <p className='wow txt' data-splitting>
                {description}
              </p>
              <ul className='feat'>
                {list?.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className='wow fadeInUp'
                      data-wow-delay={item.delay}
                    >
                      <h6>
                        <span>{index + 1}</span> {item.title}
                      </h6>
                      <p>{item.description}</p>
                    </li>
                  );
                })}
                {/* <li className='wow fadeInUp' data-wow-delay='.4s'>
                  <h6>
                    <span>2</span> My Goal
                  </h6>
                  <p>
                    continuously learn and deliver exceptional results that
                    exceed expectations.
                  </p>
                </li> */}
                {/* <li className='wow fadeInUp' data-wow-delay='.6s'>
                  <h6>
                    <span>3</span> Why Me?
                  </h6>
                  <p>
                    Dedicated and creative, committed to staying up-to-date with
                    the latest tech and best practices.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
