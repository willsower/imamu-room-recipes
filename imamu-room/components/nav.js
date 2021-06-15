import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 main-color">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src="/icons/logo.jpg" alt="Logo" width={40} height={40} />
        <span className="font-semibold text-xl tracking-tight ml-2">
          Imamu room
        </span>
      </div>
      {/* End of Logo */}

      {/* Hamburger */}
      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* End of Hamburger */}

      {/* Nav Options */}
      <div
        className={`${
            active ? '' : 'hidden'
          } w-full block flex-grow sm:flex sm:items-center sm:w-auto text-right`}
      >
        <div className="text-sm sm:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 sm:inline-block sm:mt-0 text-white font-medium"
          >
            home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 sm:inline-block sm:mt-0 text-white ml-4 font-medium"
          >
            recipes
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 sm:inline-block sm:mt-0 text-white ml-4 font-medium"
          >
            contact
          </a>
        </div>
      </div>
      {/* End of Nav Options */}
    </nav>
  );
}
