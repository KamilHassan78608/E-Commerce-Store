import React from 'react'
import { motion } from "framer-motion";

const Title = ({text1, text2}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}// animate when visible
      viewport={{ once: true, amount: 0.2 }}  // animate once only
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <div className='inline-flex items-center gap-2 my-3'>
      <p className='w-8 md:w-11 h-0.5 sm:h-[3px] bg-gray-700'></p>
      <p className='text-gray-500 text-4xl'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
      <p className='w-8 md:w-11 h-0.5 sm:h-[3px] bg-gray-700'></p>
    </div>
    </motion.div>
  )
}

export default Title
