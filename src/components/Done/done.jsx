import Lottie from 'lottie-react';
import React from 'react';

import LottieDone from '../../../public/animations/Done-man.json';

const Done = () => {
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
        animationData={LottieDone}
        loop={false}
        style={{ height: '33vh' }}
      />
    </div>
  );
};

export default Done;
