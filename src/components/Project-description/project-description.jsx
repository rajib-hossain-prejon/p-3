import React from 'react';

const ProjectDescription = ({ projectDescriptionData }) => {
  return (
    <section className='intro-section section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            <div className='htit'>
              <h4>
                <span>02 </span> Description
              </h4>
            </div>
          </div>
          <div className='col-lg-8 offset-lg-1 col-md-8'>
            <div className='text js-scroll__content'>
              <p className='extra-text'>{projectDescriptionData.content}</p>
              <ul className='smp-list mt-30'>
                {projectDescriptionData.spmList &&
                  projectDescriptionData.spmList.map((item) => (
                    <li key={item.id}>
                      <b style={{ color: '#BB73EC' }}>{item.title}</b> :{' '}
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
