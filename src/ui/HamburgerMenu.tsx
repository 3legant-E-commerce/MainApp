import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { CartIcon } from "../assets/icons";
import Logout from "../components/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="flex items-center lg:hidden">
      <button
        onClick={toggleMenu}
        className="w-10 h-10 flex items-center justify-center focus:outline-none z-50 ~mt-[18px]/[15px]"
      >
        {/* Hamburger Icon */}

        <span
          className={`block absolute ${
            isOpen ? "h-1 w-4" : "h-1 w-6"
          } rounded-full bg-[#495057] dark:bg-grey-300 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-2"
          }`}
        />
        {/* Middle Bar */}
        <span
          className={`block absolute h-1 w-6 rounded-full bg-[#495057] dark:bg-grey-300 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Bottom Bar */}
        <span
          className={`block absolute ${
            isOpen ? "h-1 w-4" : "h-1 w-6"
          } rounded-full bg-[#495057] dark:bg-grey-300 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-2"
          }`}
        />

        {/* Top Bar */}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-30 bg-black"
              initial={{ opacity: 0 }} // Start state
              animate={{ opacity: 0.8 }} // Animate to full opacity
              exit={{ opacity: 0 }} // Animate out
              transition={{ duration: 0.3 }} // Duration of the animation
              onClick={toggleMenu}
            />

            {/* Sidebar Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full z-40 bg-bg-color dark:bg-grey-800 py-10 ~px-5/28 shadow-lg border"
              initial={{ x: "100%" }} // Starts from off-screen (right)
              animate={{ x: 0 }} // Animates to its final position (in view)
              exit={{ x: "100%" }} // Animates out of view when closed
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="mt-14 text-[16px] flex flex-col gap-8">
                {["/", "/account", "/cart", "/shop"].map((section, index) => (
                  <motion.li
                    key={section}
                    className="font-semibold text-center list-none"
                    initial={{ x: "100%", opacity: 0 }} // Start off-screen and hidden
                    animate={{ x: 0, opacity: 1 }} // Animate to final position and visible
                    exit={{ x: "100%", opacity: 0 }} // Exit state
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 25,
                      delay: index * 0.2, // Staggered delay for each item
                    }}
                  >
                    <Link
                      to={section}
                      className="cursor-pointer transition-all hover:text-grey-400 min-w-fit flex items-center justify-center ~gap-2/4"
                      onClick={toggleMenu}
                    >
                      {section === "/" && (
                        <>
                          <HiOutlineHome className="~text-lg/2xl" />
                          <span>Account</span>
                        </>
                      )}
                      {section === "/account" && (
                        <>
                          <HiOutlineUser className="~text-lg/2xl" />
                          <span>Account</span>
                        </>
                      )}
                      {section === "/shop" && (
                        <>
                          <HiOutlineShoppingCart className="~text-lg/2xl" />
                          <span>Shop</span>
                        </>
                      )}
                      {section === "/cart" && (
                        <>
                          <div className="flex items-center gap-0.5">
                            <CartIcon />
                            <span className="flex items-center justify-center w-5 h-5 p-2 text-sm text-white bg-black rounded-full">
                              2
                            </span>
                          </div>
                          <span>Cart</span>
                        </>
                      )}
                    </Link>
                  </motion.li>
                ))}

                <div className="flex items-center gap-4 mt-6">
                  <motion.li
                    className="font-semibold text-center list-none"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 25,
                      delay: 0.8,
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <DarkModeToggle />
                    </div>
                  </motion.li>

                  <motion.li
                    className="font-semibold text-center list-none"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 25,
                      delay: 1.0,
                    }}
                  >
                    <div className="flex items-center justify-center">
                      <Logout />
                    </div>
                  </motion.li>
                </div>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </li>
  );
}
