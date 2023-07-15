import Link from 'next/link';
import React from 'react';

const ProjectNotFound = () => {
  return (
    <div
      style={{
        backgroundColor: '#1A202C',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
        Oops! Project not found.
      </h2>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        The project you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <h6>Please, browse another project!</h6>
      <br />
      <h3>Thank You!</h3>
      <br />  
      <Link href='/'>
        <a style={{ fontSize: '1.5rem' }}>Go back to the home page</a>
      </Link>
    </div>
  );
};

export default ProjectNotFound;
