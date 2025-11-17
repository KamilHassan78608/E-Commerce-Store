import React from 'react'
import Title from '../components/Title'
import Subscribe from '../components/Subscribe'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>

      <div className='text-center tex-2xl pt-10 border-t'>
        <Title text1="Contact" text2="Us" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}// animate when visible
        viewport={{ once: true, amount: 0.2 }}  // animate once only
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q=" className='w-full md:w-[480px] shadow-2xl rounded-2xl' alt="" />
          <div className='flex flex-col justify-center gap-4 items-start'>
            <p className='text-gray-800 font-bold text-2xl'>Dukan<span className='text-xs text-gray-400'>.pk</span></p>
            <p className='text-gray-400 text-sm'>Abdara Road <br /> Peshwar, Pakistan</p>
            <p className='text-gray-400 text-sm'>(+92) 314 3896267 <br /> Dukan@email.pk</p>
            <p className='text-gray-500 font-bold text-xl'>Join Dukan! <br /> <p className='text-gray-500 text-sm'>Learn more About Team and Job Openings.</p></p>
            <button className='border-2 border-gray-700 p-3 mt-4 rounded-2xl text-2xs font-bold duration-200 active:bg-black hover:text-white hover:bg-gray-700 cursor-pointer '>Explore More</button>
          </div>
        </div>
      </motion.div>

      <div className="mt-10">
        <Subscribe />
      </div>

    </div>
  )
}

export default Contact
