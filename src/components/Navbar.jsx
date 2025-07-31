import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { styles } from "../styles";
import { navLinks } from "../constants";

import { logo, menu, close } from "../assets";
import Abhinay from "../assets/Software Developer.pdf";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Abhinay Insights"
            className="w-40 h-9 object-contain"
          />
          {/* <p className="hidden sm:block text-white text-[18px] font-bold cursor-pointer">
            Abhinay Yadav &nbsp;
            <span className="sm:block hidden">| Software Developer</span>
          </p> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              {active === "Resume" ? (
                <a
                  className={styles.sectionSubText}
                  href={Abhinay}
                  download="Abhinay Yadav"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>{link.title}</button>
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } flex-col p-6 bg-gradient-to-b from-[#915EFF] to-black absolute top-20 right-0 mx-4 my-2 min-w-[250px] z-10 rounded-x1`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {active === "Resume" ? (
                    <a
                      className={styles.sectionSubText}
                      href={Abhinay}
                      download="Abhinay Yadav"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>{link.title}</button>
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex column gap-6 justify-center mt-4 text-white text-5xl">
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
      </div>
    </nav>
  );
};

export default Navbar;
