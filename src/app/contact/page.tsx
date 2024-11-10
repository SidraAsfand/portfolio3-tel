import React from 'react'
import { VscMail } from "react-icons/vsc";
import { VscCallIncoming } from "react-icons/vsc";
import { RiMapPinUserFill } from "react-icons/ri";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


function Contact() {
  return (
    <>
    <div className='min-h-screen bg-black'>
    <Header  />
 <div className='flex flex-col items-center justify-center  mt-20 text-purple-700 '>
      
      <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-300 duration-300 max-w-2xl p-6 bg-purple-200 rounded-lg  shadow-md  '>
      <h1 className=" text-4xl font-bold mb-4 text-center text-blue-600  bg-pink-300 hover:text-yellow-300" >Contact Us</h1>
          <div className='space-y-4 max-w-4xl mx-auto px-4 py-12'>
            <div className='flex items-center  '>
            
            <VscMail className="h-6 w-6 text-blue-600 mr-4" />
            <span className="text-lg">smartgirlbarbie28@gmail.com</span>
          </div>

          <div className="flex items-center">
          <VscCallIncoming  className="h-6 w-6 text-blue-600 mr-4" />
            <span className="text-lg">+92317307734</span>
          </div>

          <div className="flex items-center">
            < RiMapPinUserFill className="h-6 w-6 text-blue-600 mr-4" />

            <span className="text-lg">1234 Street Name, karachi, Pakistan</span>
          </div>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
              type="text"
              placeholder="Your Name"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700">Email</     label>
              <input
              type="email"
              placeholder="Your Email"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

 </div>
 <Footer />
 </>
  );
}

export default Contact
