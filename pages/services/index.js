
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';
// import { motion } from 'framer-motion';
import {fadeIn } from '../../variants'
const Services = () => {
  return (
  <div>
    <Circles />
    <div className='container xl:mt-[120px] xl:ml-[120px] mx-auto'>
      <div className='flex flex-col xl:-flex-row gap-x-8'>
        {/* text */}
        <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
          <h2 className='h2 xl:mt-8'>My Services<span className='text-accent'>.</span>
          </h2>
          <p className='mb-4 max-w-[400px] mx-auto lg:mx-0 '>Take your 5G ideas to the next level. Are you a developer, entrepreneur, or enterprise looking to build the future of 5G? Then Tech Experience is for you</p>
        </div>
        {/* slider */}
        <div className='w-full xl:max-w-[65%] '>
        <ServiceSlider />
        </div>
      </div>
    </div>
    <Bulb />
  </div>
)};

export default Services;
