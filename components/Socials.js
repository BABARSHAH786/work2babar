import Link from "next/link";
import {RiYoutubeLine,RiInstagramLine,RiFacebookLine} from 'react-icons/ri'
const Socials = () => {
  return( 
  <div className=" flex items-center gap-x-5 text-lg ">
    <Link href='https://www.youtube.com/@knowledgelearning9352' className="text-4xl hover:text-accent transition-all duration-300"><a target="_blank" rel="noopener noreferrer"></a>
      <RiYoutubeLine />
    </Link>
    <Link href={'https://www.facebook.com/groups/962710811500396/?ref=share'} className="text-4xl hover:text-accent transition-all duration-300">
    <a target="_blank" rel="noopener noreferrer"></a>
      <RiFacebookLine />
    </Link><Link href={''} className="text-4xl hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
  </div>
)};

export default Socials;
