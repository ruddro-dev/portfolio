import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <motion.div
        className='text-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=''
          className='w-36 mx-auto mb-2'
        />
        <motion.div
          className='w-max flex items-center gap-2 mx-auto'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=''
            className='w-6'
          />
          protaplpuid@gmail.com
        </motion.div>
      </motion.div>

      <motion.div
        className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          © 2025 Protap Ruddrodeb Sarker. Build with Next.js. All rights reserved.
        </motion.p>
        <motion.ul
          className='flex items-center gap-10 justify-center mt-4 sm:mt-0'
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <li>
            <motion.a
              target='_blank'
              href='https://github.com/ruddro-dev'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Github
            </motion.a>
          </li>
          <li>
            <motion.a
              target='_blank'
              href='https://www.linkedin.com/in/ruddro-dev/'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              LinkedIn
            </motion.a>
          </li>
          <li>
            <motion.a
              target='_blank'
              href='https://leetcode.com/u/ruddro-dev/'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              LeetCode
            </motion.a>
          </li>
        </motion.ul>
      </motion.div>
    </div>
  )
}

export default Footer
