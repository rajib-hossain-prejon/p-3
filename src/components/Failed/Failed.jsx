import Lottie from 'lottie-react';
import React from 'react';

import LotieFailed from '../../../public/animations/Failed.json';

const Failed = () => {
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
        animationData={LotieFailed}
        loop={false}
        style={{ height: '26vh' }}
      />
    </div>
  );
};

export default Failed;
