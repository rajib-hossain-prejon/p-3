import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsCircle2 = ({ from, theme }) => {
  const cpStyle = {
    path: {
      stroke: 'rgb(18, 194, 233)',
    },
    trail: {
      stroke: theme ? (theme == 'dark' ? '#0f1013' : '#e5e5e5') : '',
    },
    text: {
      fill: theme ? (theme == 'dark' ? '#ffffff' : '#4e4e4e') : '',
      // Text size
      fontSize: '16px',
    },
  };
  return (
    <section
      className={`skills-circle pt-50 pb-50 ${
        from ? (from === 'aboutPage' ? 'sub-bg' : '') : ''
      }`}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className=''>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='item wow fadeInLeft' data-wow-delay='.6'>
                    <div className='skill'>
                      <CircularProgressbarWithChildren
                        value={100}
                        strokeWidth={2}
                        styles={cpStyle}
                      >
                        <img
                          src='https://img.icons8.com/clouds/100/iphone.png'
                          alt='Rajib Hossain Prejon Skills'
                          style={{
                            width: '100%',
                            border: '1px solid white',
                            borderRadius: '50%',
                            padding: 2,
                            marginTop: '-5',
                          }}
                        />
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className='cont'>
                      <span>Mobile</span>
                      <h6>Development</h6>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='item wow fadeInLeft' data-wow-delay='.3'>
                    <div className='skill'>
                      <CircularProgressbarWithChildren
                        value={100}
                        strokeWidth={2}
                        styles={cpStyle}
                      >
                        <img
                          src='https://img.icons8.com/clouds/100/domain.png'
                          alt='Rajib Hossain Prejon Skills'
                          style={{
                            width: '100%',
                            border: '1px solid white',
                            borderRadius: '50%',
                            padding: 2,
                            marginTop: '-5',
                          }}
                        />
                      </CircularProgressbarWithChildren>
                    </div>
                    <div className='cont'>
                      <span>Web</span>
                      <h6>Development</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle2;
