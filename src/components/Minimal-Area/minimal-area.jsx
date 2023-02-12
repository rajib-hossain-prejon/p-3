/* eslint-disable @next/next/no-img-element */
import React from 'react';
import cardMouseEffect from '../../common/cardMouseEffect';
import { thumparallaxDown } from '../../common/thumparallax';

const MinimalArea = () => {
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
              <img
                className='thumparallax-down'
                src='/img/prejon700.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-6 valign'>
            <div className='content pt-0'>
              <h4 className='wow color-font'>About Me</h4>
              <p className='wow txt' data-splitting>
                This is dummy data. Real data is Coming Soon.This is dummy data.
                Real data is Coming Soon. InsALLAH.....
              </p>
              <ul className='feat'>
                <li className='wow fadeInUp' data-wow-delay='.2s'>
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>This is dummy data. Real data is Coming Soon</p>
                </li>
                <li className='wow fadeInUp' data-wow-delay='.4s'>
                  <h6>
                    <span>2</span> My Goal
                  </h6>
                  <p>This is dummy data. Real data is Coming Soon</p>
                </li>
                <li className='wow fadeInUp' data-wow-delay='.6s'>
                  <h6>
                    <span>3</span> Why Me?
                  </h6>
                  <p>This is dummy data. Real data is Coming Soon</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
