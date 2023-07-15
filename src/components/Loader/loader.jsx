import Lottie from 'lottie-react';
import React from 'react';
import LoaderLottie from '../../../public/animations/Loader.json';

const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.8,
        zIndex: 9999999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Lottie
        animationData={LoaderLottie}
        loop={true}
        style={{ height: '20vh' }}
      />
    </div>
  );
};

export default Loader;
