import Circles from '../../components/Circles';
import {BsArrowRight } from 'react-icons/bs'
const Contact = () => {
  return <div className='h-full bg-primary/30'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* text and form */}
      <div className='flex flex-col w-full max-w-[700px] bg-pink-500/10'>
        {/* text */}

        <h2>Lets <span className='text-accent'>connect.</span>
        </h2>
        <form className='flex-1 flex flex-col gap-6 w-full mx-auto'>
          {/* group */}
          <div className='flex gap-x-6 w-full'>
            <input type='text' placeholder='name' className='input' />
            <input type='text' placeholder='email' className='input' />
          </div>
          <input type='text' placeholder='email' className='input' />
          <textarea placeholder='message' className='textarea'></textarea>
          <button className='btn rounded-full border border-white/50 max-w-[170px ] overflow-hidden hover:border-accent group '>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 '>lets talk</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]  items-center xl:ml-[355px] sm:ml-[355px] ' />
          </button>

        </form>
      </div>
    </div>
    </div>;
};

export default Contact;
