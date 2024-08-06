import React from 'react';
import ExpCard from '../Components/card';

const Experience = () => {
  return (
    <>
      <div  id='experience' className="w-screen h-screen flex flex-col items-center p-20">
        <p className="text-6xl font-semibold tracking-normal text-transparent bg-gradient-to-br px-4 from-emerald-600 to-emerald-300 bg-clip-text mb-10">
          <u>My Experience</u>
        </p>
        {/* Flexbox container for cards */}
        <div className="flex flex-row justify-center p-4 w-screen">

        <ExpCard 
        title="CYBERSECURITY"
        desx='I have completed google cybersecurity course sponsored by Coursera.'
        url='./cyber-security.png'
        />

          <ExpCard title="TEAM PHOENIX WEBSITE"
          url="./domain.png"
          desx="Made a complete MERN stack based website for the official aerodunamic team of NIT JSR"
          />
          <ExpCard
          title="RESEARCH WORK"
          url="./research.png"
          desx='I have written two research papers in the field of law.'
          />
         
        </div>
      </div>
    </>
  );
};

export default Experience;
