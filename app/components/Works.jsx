import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Works = ({ isDarkMode }) => {
  const projectLinks = [
    'https://github.com/ruddro-dev/EcommerceMVC',
    'https://github.com/ruddro-dev/Netflix-Clone-React-Firebase',
    'https://github.com/ruddro-dev/Reactjs-Ecommerce',
    'https://github.com/ruddro-dev/Angular-Login-Logout-with-Asp.Net-Core-Identity-JWT',
  ];

  const handleRedirect = (index) => {
    const url = projectLinks[index];
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
      </motion.p>

      <motion.div
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer transition-all transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <motion.div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div
                onClick={() => handleRedirect(index)}
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] transition cursor-pointer"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="https://github.com/ruddro-dev"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: false }}
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover hover:bg-lightHover"
      >
        Show more{' '}
        <Image
          src={
            isDarkMode
              ? assets.right_arrow_bold_dark
              : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </div>
  );
};

export default Works;
