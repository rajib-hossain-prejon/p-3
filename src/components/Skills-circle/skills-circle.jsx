import React from 'react';
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import skillsData from '../../data/sections/skills.json';

const SkillsCircle = ({ from, theme }) => {
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
        <div className='row text-center'>
          <div className='mx-auto mb-20'>
            <h1 className=' color-font fw-200'>My Skills</h1>
            <br />
            <p className='wow txt' data-splitting>
              This is dummy data. Real data is Coming Soon.This is dummy data.
              Real data is Coming Soon. InsALLAH.....
            </p>
          </div>
          <div className='col-lg-12 mx-auto'>
            {' '}
            {/* col-lg-7 chilo */}
            <div className='px-auto mx-auto'>
              <div className='row ml-5 pl-5'>
                {/* ----------------- Three Skill ------------------- */}
                {skillsData.map((data) => (
                  <div
                    key={data.id}
                    className=' col-lg-2 col-md-5   col-sm-10 m-2 p-2'
                  >
                    <div className='item wow fadeInLeft' data-wow-delay='.6'>
                      <div className='skill'>
                        {/* <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={`${90}%`}
                        styles={cpStyle}
                      /> */}
                        <CircularProgressbarWithChildren
                          value={data.percantage}
                          strokeWidth={2}
                          styles={cpStyle}
                        >
                          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                          {/* <img
                          style={{ width: 40, marginTop: -5 }}
                          src='https://img.icons8.com/color/48/null/tailwindcss.png'
                          alt='doge'
                        />
                        <div style={{ fontSize: 12, marginTop: -5 }}>
                          <strong>66%</strong> mate
                        </div> */}
                          <div
                            className='cont w-100 px-1 text-center '
                            style={{ marginTop: -10 }}
                          >
                            <small>{data.title}</small>
                            {/* <br />
                          <small>90%</small>
                          <br /> */}
                            <br />
                            <img
                              src={data.img}
                              style={{
                                width: '27px',
                                border: '1px solid white',
                                borderRadius: '50%',
                                padding: 2,
                                marginTop: '-5',
                              }}
                            />
                          </div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                  </div>
                ))}

                {/* ----------------- Skill (i) ------------------- */}

                {/* ----------------- Skill (i) -------------------
                <div className='col-lg-4 col-md-6'>
                  <div className='item wow fadeInLeft' data-wow-delay='.6'>
                    <div className='skill'>
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={`${90}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className='cont'>
                      <span>Project</span>
                      <h6>Consulting</h6>
                    </div>
                  </div>
                </div> */}

                {/* ----------------- Skill (i) ------------------- */}
                {/* <div className=' col-lg-4 col-md-6'>
                  <div className='item wow fadeInLeft' data-wow-delay='.3'>
                    <div className='skill'>
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={`${75}%`}
                        styles={cpStyle}
                      />
                    </div>
                    <div className='cont'>
                      <span>App</span>
                      <h6>Development</h6>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
