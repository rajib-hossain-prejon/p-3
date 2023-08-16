import Head from 'next/head';
import React from 'react';
import DarkTheme from '../../layouts/Dark';

const TryAgain = () => {
  const handleTryAgain = () => {
    // Reload the page when the "Try Again" button is clicked
    window.location.reload();
  };

  return (
    <DarkTheme>
      <Head>
        <title>Error - Rajib Hossain Prejon</title>
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 className='color-font'>Oops, something went wrong!</h1>
          <p>There was an error fetching the data.</p>

          <div className='item mt-30'>
            <button
              type='submit'
              className='butn bord'
              style={{
                backgroundColor: '#eb474f',
                height: '50px',
                cursor: 'pointer',
              }}
              onClick={handleTryAgain}
            >
              <i className='ion-ios-reload mr-3 fa-lg' />
              <span> Try Again </span>
            </button>
          </div>
        </div>
      </div>
    </DarkTheme>
  );
};

export default TryAgain;
