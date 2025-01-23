import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"

        className="p-1 font-[600] text-[15px]"
      >
        <a
          href="/"
          className="menu flex items-center hover:text-[#ab7512] transition-colors"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"

        className="p-1 font-[600] text-[15px]"
      >
        <a
          href="/About"
          className="menu border-2 border-gray-500 flex items-center hover:text-[#ab7512] transition-colors"
        >
          About
        </a>
      </Typography>
      <Typography
        as="li"

        className="p-1 font-[600] text-[15px]"
      >
        <a
          href="#"
          className="menu border-2 border-gray-500 flex items-center hover:text-[#ab7512] transition-colors"
        >
          Services
        </a>
      </Typography>
      <Typography
        as="li"

        className="p-1 font-[600] text-[15px]"
      >
        <a
          href="#"
          className="menu border-2 border-gray-500 flex items-center hover:text-[#ab7512] transition-colors"
        >
          Gallery
        </a>
      </Typography>
      <Typography
        as="li"

        className="p-1 font-[600] text-[15px]"
      >
        <a
          href="#"
          className="px-3 rounded-br-[8px] rounded-tl-[8px] border border-gray-600 flex items-center hover:text-[#ab7512] transition-colors"
        >
          Contact Us
        </a>
      </Typography>
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <>
     <Navbar
       className={`container mx-auto px-32 py-0 w-full backdrop-blur-none backdrop-saturate-100 bg-opacity-100 rounded-none shadow-none max-w-none z-[999] border-none ${isSticky
           ? "sticky top-0 bg-[#7fb2e78f] !text-white transition-all duration-300"
           : "absolute top-0 bg-transparent text-blue-gray-900"
         }`}
     >
       <div className="flex items-center justify-between">
         <div>
           <Link href={"/"}>
             <img src="/logo4.png" width={90} alt="Shiaka Logo" />
           </Link>
         </div>
         <div className="hidden lg:flex">
           <NavList />
         </div>
         <IconButton
           variant="text"
           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
           ripple={false}
           onClick={() => setOpenNav(!openNav)}
         >
           {openNav ? (
             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
           ) : (
             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
           )}
         </IconButton>
       </div>
       <Collapse open={openNav}>
         <NavList />
       </Collapse>
     </Navbar>
     
   </>
  );
}
