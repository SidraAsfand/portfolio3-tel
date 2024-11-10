import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer';

function About() {
  return (
    <>
    <div className='min-h-screen bg-black'>
       <Header  />
    <div className='flex flex-col items-center justify-center  mt-20 text-purple-700 '>
     
      <div className='max-w-4xl mx-auto px-4 py-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 duration-300 max-w-2xl p-6 bg-purple-200 rounded-lg  shadow-md  '>
        
        <h1 className=" text-4xl font-bold mb-4 text-center text-blue-600  bg-pink-300 hover:text-yellow-300" >About Us</h1>
        
        <p className='text-lg mb-4 text-center'>Welcome to my  portfolio!I'm dedicating to providing top-notch services and delivering  quality solutions that meet ourclients' needs.
          is passionate about what i do,and i strive  to go above and beyond in  every
          projects i undertake.</p>
          
          <h2  className='text-blue-700 text-2xl '>Education</h2>
          <ul className='list-decimal ml-10'>
            <li>Masters(C.S)</li>
            <li>Three years D.A.E in C.I.T</li></ul>
            <h2  className='text-blue-700 text-2xl '>Skill</h2>
          <ul className='list-disc ml-10'><li>I am full stack developer</li>
          </ul>
          
          <p className='text-lg'>
            With  years  of experience,I am  committed to innovation,intigrity,
            and   excellence.Thank you for visiting, and  I look forward to working together!
          </p>
      </div>
    </div>
 
    </div>
    <Footer />
</>
  );
}

export default About 
