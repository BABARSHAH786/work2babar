import React, { useState } from "react";
import Avatar from "../../components/Avatar";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          () => <FaHtml5 />,
          () =><FaCss3 />,
          () =><FaJs />,
          () =><FaReact />,
          () =><SiNextdotjs />,
          () =><SiFramer />,
          () =><FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
        () =><FaFigma />,
        () => <SiAdobexd />,
        () =>  <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Best web development",
        stage: "2023",
      },
      {
        title: "Best web development",
        stage: "2023",
      },
      {
        title: "Web Designer in figma",
        stage: "2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior web developer",
        stage: "2023 - Present",
      },
      {
        title: "Quality Assurance",
        stage: "2021 - Present",
      },
      {
        title: "Intern PCSIR",
        stage: "2018",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Saylani",
        stage: "2024",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2023",
      },
      {
        title: "Certified Web Designer ",
        stage: "2023",
      },
    ],
  },
];

import Circles from "../../components/Circles";
import { motion } from "framer-motion";
// import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        // variants={fadeIn=('right',0.2)}
        initial="show"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute  -left-[370px] "
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-[380px] mt-0">
        {/* text */}
        <div className="relative xl:top-[20px] xl:left-[120px] justify-center ">
          <h2>Captivating<span className="text-accent"> stories</span> birth magnificient designs </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-1 ">2 years ago, I began freelancing as a developer . Sinse then i have done remote work for agency, consulted for startup and study in saylani smit  and teaching on youtube of front end web development 
          </p>
          {/* counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6 " >
              {/* expeience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={7}/>+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of experience</div>
              </div>
              {/* client */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9} duration={7}/>+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Satisfied clients</div>
              </div>
              {/* project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5}/>+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Finished Projects</div>
              </div>
            </div>
          </div>


        </div>
        {/* info */}
        <div className="relative xl:top-[80px] right-[200px] flex flex-col w-full xl:max-w-[48%] h-[480px] ">
          <div className="flex gap-x-4 xl:gap-x8 mx-auto xl:mx-5 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after-bg-accent after:transition-all after:duration-300 "
                  } cursor-pointer capatilize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div  className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 ">
                  <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  {/* icons */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
