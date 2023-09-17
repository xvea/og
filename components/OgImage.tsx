import React from 'react';

export interface ImageProps {
  title: string;
  top: string;
}

// For CSS Background patterns
// https://codepen.io/bansal-io/pen/mdereZN

const OgImage: React.FC<ImageProps> = ({ title = '', top }) => {
  const lg = {
    fontSize: '72px',
    lineHeight: '80px',
    fontWeight: 800,
    fontFamily: 'Inter',
  };
  const md = {
    fontSize: '62px',
    lineHeight: '70px',
    fontWeight: 800,
    fontFamily: 'Inter',
  };
  return (
    <div className='min-h-screen w-full  flex justify-center items-center text-fg'>
      <div
        id='preview'
        className='flex flex-col items-start justify-between h-full'
        style={{
          width: '1200px',
          height: '630px',
          padding: '80px',
          background: 'var(--bg)',
          // backgroundImage:
          //   'radial-gradient(ellipse  100% 100% , #181818, #181818 25%, transparent 25%),radial-gradient(ellipse  50% 50% , #333, #333 25%, #252525 25%)',
          // backgroundSize: '2em 2em, 4em 4em',
          backgroundImage:
            'linear-gradient(#222222 1px , transparent 1px ),linear-gradient(to right, #222222 1px , transparent 1px )',
          backgroundSize: '100px 100px',
        }}
      >
        <p
          className='mono'
          style={{ fontSize: '28px', marginBottom: '25px', color: '#c4c4c4' }}
        >
          {top}
        </p>
        <h1 style={title.length < 60 ? lg : md}>{title}</h1>
        <div className='flex justify-between w-full'>
          <p className='mono' style={{ fontSize: '28px', color: '#c4c4c4' }}>
            xve.re
          </p>
          <img src='/logo.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default OgImage;
