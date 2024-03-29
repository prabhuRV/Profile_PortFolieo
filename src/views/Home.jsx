import React, { useContext } from "react";

import prabhu from "../assets/prabhu.png";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Lightbackground from "../assets/li.jpg";
import cloudDark from "../assets/cloudDark.png";
import style from "./Home.module.css";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? {
                backgroundImage: `url('${Lightbackground}')`,
                backgroundSize: "cover",
              }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
               
                className={darkMode ? "block text-black" : " text-white"}
               
              >
                Hi, I am Prabhu
              </motion.span>
              <span className="block text-violet-700 z-0 md:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    3000,
                    "Full Stack Developer",
                    3000,
                    "Web Developer",
                    3000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
          
            >
              I am a Full-Stack Developer.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link} target="_blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" className={style.logo} src={el.url} />
                  {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href="https://drive.google.com/file/d/12QnamUOb-Sc7CiUOwGAT6agzJKepn7aQ/view?usp=sharing" target="_blank"
                  className="w-20 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-violet-700 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={prabhu}
            alt=""
            className="md:w-2/5 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
