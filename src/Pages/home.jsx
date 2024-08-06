import React from 'react';

const Home = () => {
  return (
    <>
      <div id='home' className="h-screen flex flex-col items-center justify-center min-h-screen w -screen px-12 gap-6">
        <img src="./pranjal_imge.jpg" className="rounded-full w-96 shadow-lg shadow-emerald-900" alt="Pranjal" />
        <div className="intro shadow-lg shadow-emerald-800 text-center bg-transparent">  
          <p className="text-2xl font-semibold tracking-normal text-transparent bg-gradient-to-br px-4 from-emerald-600 to-emerald-300 bg-clip-text">
            Pranjal Mishra
          </p>
          <p className="text-3xl p-5 font-thin text-white">
            Third year B.tech undergraduate (NIT Jamshedpur)
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
