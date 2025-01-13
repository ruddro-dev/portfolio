import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: false }}
        className='text-center mb-2 text-lg font-Ovo'
      >
        What I offer
      </motion.h4>
      <motion.h2 
        initial={{ opacity: 0, x: 20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
        viewport={{ once: false }}
        className='text-center text-5xl font-Ovo'
      >
        My services
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        I am passionate about delivering high-quality, enterprise-grade applications while maintaining excellent communication and client satisfaction.
      </motion.p>
      
      <motion.div 
        className='grid grid-cols-auto gap-6 my-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}  
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: false }}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
          >
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read more <Image src={assets.right_arrow} className='w-4' alt='' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
