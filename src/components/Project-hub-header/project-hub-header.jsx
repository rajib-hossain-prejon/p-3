import React from 'react';
import fadeWhenScroll from '../../common/fadeWhenScroll';

const ProjectHubHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll('.fixed-slider .capt .parlx'));
  }, []);
  return (
    <header
      ref={sliderRef}
      className='works-header fixed-slider hfixd valign sub-bg'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 col-md-9 static'>
            <div className='capt mt-50'>
              <div className='parlx text-center'>
                <h1 className='color-font'>Project Hub</h1>

                <p>
                  GET YOUR WORK DONE AND SHARE YOUR THOUGHTS - Help Us Improve
                  Our Services
                </p>
              </div>

              <div className='bactxt custom-font valign'>
                <span className='full-width'>prejon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectHubHeader;
