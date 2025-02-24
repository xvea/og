import React from 'react';

export interface ImageProps {
  title: string;
  top: string;
}

const AmieImage: React.FC<ImageProps> = ({ title = '', top }) => {
  return (
    <div className='min-h-screen w-full  flex justify-center items-center text-fg'>
      <div
        id='preview'
        className='relative flex flex-col items-start justify-between h-full'
        style={{
          width: '1200px',
          height: '630px',
          padding: '80px',
          background: 'rgb(49, 49, 49)',
        }}
      >
        <div className='rounded-full w-32 h-32 z-10 overflow-hidden mt-32'>
          <img src='/logo.png' alt='' />
        </div>

        <div className='z-10'>
          <span
            className='font-semibold text-2xl'
            style={{ color: 'rgb(128, 232, 178)' }}
          >
            EVENT
          </span>
          <p className='font-bold text-6xl mt-4'>{title}</p>
        </div>

        <img className='absolute top-0 left-0 z-0' src='/amie-bg.svg' />
      </div>
    </div>
  );
};

const Logo = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 683 514'
    width='60'
    height='60'
    fill='white'
  >
    <path d='m207.65 308.28-14.83-25.68-29.66-51.38-44.49 77.07L103.83 334 89 359.66l-14.84 25.69L59.33 411 44.5 436.73l-14.83 25.69-14.84 25.69L0 513.8h118.66l44.49-77.07L178 411l14.84-25.69 14.83-25.69L222.48 334l-14.83-25.72Z' />
    <path d='m667.46 488.11-14.82-25.69-14.83-25.69L623 411l-29.66-51.38L578.46 334 534 256.9l-14.84-25.69-29.66-51.38-14.82-25.68-14.88-25.7-14.8-25.69-14.86-25.69-29.66-51.38L385.64 0h-89l-14.82 25.68L267 51.38l-14.85 25.69-14.83 25.69-14.84 25.69-29.66 51.38 29.66 51.38 14.83 25.68 14.83 25.69 14.86 25.7 29.66 51.38 14.83 25.68L326.3 411h-89l-14.84 25.69-29.66 51.38L178 513.8h326.3l-14.83-25.68-14.82-25.68-14.85-25.71L445 411l-14.83-25.69-14.87-25.65L400.47 334l-14.83-25.68L356 256.9l-14.84-25.69-29.66-51.38 14.83-25.69 14.83-25.68L356 154.13l59.32 102.76 14.83 25.68L445 308.28 459.8 334l14.84 25.69 14.83 25.69L504.3 411l14.83 25.69L534 462.42l29.66 51.38h118.63l-14.83-25.69Z' />
  </svg>
);

export default AmieImage;
