import React from 'react'
import Title from '../components/Title'
import Subscribe from '../components/Subscribe'
import pic from '../assets/Hero.jpg'
import { whyChooseUs } from "../data/whyChooseUs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1="About" text2="Us" />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={pic} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil reiciendis quia quo itaque. Sed nemo quam quidem earum ipsam blanditiis, dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam numquam maiores eum dolores alias id fuga ipsum quis recusandae, doloremque nostrum impedit placeat voluptate ad quas accusantium inventore laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas non labore molestias voluptatum! Id nam consectetur qui architecto voluptas dicta, dignissimos odit temporibus. Maiores corporis magnam enim dolorum similique!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil reiciendis quia quo itaque. Sed nemo quam quidem earum ipsam blanditiis, dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam numquam maiores eum dolores alias id fuga ipsum quis recusandae, doloremque nostrum impedit placeat voluptate ad quas accusantium inventore laborum Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quas non labore molestias voluptatum! Id nam consectetur qui architecto voluptas dicta, dignissimos odit temporibus. Maiores corporis magnam enim dolorum similique!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis, voluptatem cumque tenetur ut consectetur, quis obcaecati dolores blanditiis at, error mollitia odit aut quibusdam temporibus soluta eveniet quasi perferendis.
            Possimus magni eveniet rerum culpa quaerat repudiandae in obcaecati fuga mollitia blanditiis dolore molestias nam eos ex, aliquam doloribus ea fugiat aperiam earum doloremque! Excepturi temporibus harum at illum ducimus.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="my-40 px-6">

        <div className="text-center mb-10">
          <Title text1="Why" text2="Choose Us" />
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover what makes our clothing brand stand out from the rest.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}// animate when visible
          viewport={{ once: true, amount: 0.2 }}  // animate once only
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto my-10">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="border p-5 rounded-xl shadow hover:shadow-lg transition-all bg-white"
              >
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          </motion.div>

          <div className='mt-20'>
            <Subscribe /> 
          </div>

      </div>

    </div>
  )
}

export default About
