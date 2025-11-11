import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex items-center gap-2 my-3'>
      <p className='w-8 md:w-11 h-0.5 sm:h-[3px] bg-gray-700'></p>
      <p className='text-gray-500 text-6xl'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
      <p className='w-8 md:w-11 h-0.5 sm:h-[3px] bg-gray-700'></p>
    </div>
  )
}

export default Title
