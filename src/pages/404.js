import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import DarkTheme from '../layouts/Dark';

const ErrorPage = () => {

   const handleTryAgain = () => {
    // Reload the page when the "Try Again" button is clicked
    window.location.reload();
  };

  return (
  
   <DarkTheme>
      <Head>
        <title>Page Not Found - Rajib Hossain Prejon</title>
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
          <h1 className='color-font'>404 - Page Not Found</h1>
          

          <div className='item mt-30'>
            
            <Link href={`/`}>
              <a className='butn bord curve wow fadeInUp' data-wow-delay='.5s'>
           
              <span> Go To Home </span>
            
            </a>
            </Link>
          </div>
        </div>
      </div>
    </DarkTheme>
  );
};

export default ErrorPage;
