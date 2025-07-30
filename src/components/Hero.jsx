import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col  justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className="text-[#915eff]">Abhinay Yadav</span>
            </h1>
            <br /> <br /> <br />
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Passionate web developer skilled in creating{" "}
              <br className="sm:block hidden" />
              dynamic and user-friendly websites with a focus on modern
              technologies.
            </p>
          </div>
          <br /> <br /> <br /> <br /> <br />
          <div className="hidden sm:flex gap-6 justify-center mt-4 text-white text-5xl">
            <a
              href="https://github.com/abhinayy58"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#915eff]"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinay-yadav-0b4614149/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#0A66C2]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/yadav___abhinay"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:abhinayy48@gmail.com"
              className="transition hover:text-red-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="hidden px-8 lg:flex absolute bottom-22   lg:bottom-10 w-full justify-end items-center">
        <a href="#about">
          <div
            style={{ borderRadius: "50% 50%" }}
            className="w-[35px] h-[64px] 
           rounded-3x1 border-4 border-secondary 
          flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full 
            bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
