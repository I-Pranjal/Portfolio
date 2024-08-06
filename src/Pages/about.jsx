import React from 'react';

const About = () => {
  return (
    <>
      <div id='about' className="w-screen bg-gray-900 p-24 ">
        <div className="grid grid-cols-6 gap-10">
          <img
            src="./Cute boy.jpeg"
            className="col-span-2 rounded-3xl opacity-65 shadow-xl shadow-emerald-900"
          />

          <div className="col-span-4 bg-slate-950 bg-opacity-35 rounded-bl-3xl rounded-tr-3xl p-12 shadow-xl shadow-emerald-900">
            <p className="text-3xl font-bold tracking-normal text-transparent bg-gradient-to-br px-4 from-emerald-600 to-emerald-300 bg-clip-text">
              Who am I?
            </p>
            <p className="text-4xl pt-8 font-bold text-white ">
              Myself Pranjal Mishra, I'm a MERN Stack Developer.
            </p>
            <p className="text-xl py-12 text-white opacity-45">
              My name is Pranjal Mishra. I hail from Kannauj, Uttar Pradesh. Currently, I am pursuing Bachelor's of
              Technology in Production and Industrial Engineering from National Institute of Technology, Jamshepdur.
              I am a third year undergrad enthusiastic about new softwares and technologies. I have also completed course
              on cybersecurity by Google and currently studying about Supply Chain management under my course curriculum.
            </p>

            {/* Horizontal line */}
            <hr className="border-t border-gray-600 mb-8" />

            <div className="grid grid-cols-2 grid-rows-2  text-white ">
              <p className="text-xl  p-4">
                <b>Name : </b>
                Pranjal Mishra
              </p>
              <p className="text-xl p-4">
                <b>City : </b>
                Kannauj, Uttar Pradesh, India
              </p>
              <p className="text-xl p-4">
                <b>Age : </b>
                20
              </p>
              <p className="text-xl p-4">
                <b>Email : </b>
                pranjalnitjsr@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
