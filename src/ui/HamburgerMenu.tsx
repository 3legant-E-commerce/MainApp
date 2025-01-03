import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="flex items-center sm:hidden">
      <button
        onClick={toggleMenu}
        className="w-10 h-10 flex items-center justify-center focus:outline-none z-50 ~mt-[18px]/[15px]"
      >
        {/* Hamburger Icon */}

        <span
          className={`block absolute ${
            isOpen ? "h-1 w-4" : "h-1 w-6"
          } rounded-full bg-[#495057] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-2"
          }`}
        />
        {/* Middle Bar */}
        <span
          className={`block absolute h-1 w-6 rounded-full bg-[#495057] transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Bottom Bar */}
        <span
          className={`block absolute ${
            isOpen ? "h-1 w-4" : "h-1 w-6"
          } rounded-full bg-[#495057] transform transition-transform duration-300 ease-in-out ${
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
              className="fixed top-0 right-0 h-full w-[200px] z-40 bg-bg-color p-4 shadow-lg"
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
              <ul className="space-y-0 mt-12 pr-5 text-[16px] flex flex-col gap-2">
                {["/product", "/shop", "/"].map((section, index) => (
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
                      className="cursor-pointer transition-all hover:text-[#212529] min-w-fit"
                      onClick={toggleMenu}
                    >
                      {section === "/product" && "Product"}
                      {section === "/shop" && "Shop"}
                      {section === "/" && "LandingPage"}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </li>
  );
}
