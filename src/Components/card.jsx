import React from 'react';

const ExpCard = ({title , desx ,url }) => {
  return (
    <div className="min-w-[400px] max-w-[300px] h-auto bg-white bg-opacity-45
        shadow-blue-900 text-white
     shadow-xl rounded-lg p-6 flex-shrink-0 mx-4">
        <img
        src={url}
        className='p-4'
        />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className='text-xl'>
       {desx}
      </p>
    </div>
  );
};

export default ExpCard;
