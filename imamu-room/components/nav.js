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
          active ? "" : "hidden"
        } w-full block flex-grow sm:flex sm:items-center sm:w-auto text-right align-baseline`}
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
            about
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 sm:inline-block sm:mt-0 text-white ml-4 font-medium"
          >
            contact
          </a>

          {/* SVG Icons */}

          {/* Youtube */}
          <a
            href="https://www.youtube.com/channel/UC0BS2lLese-pldAtdOUgsfg" target="_blank"
            className="block mt-4 sm:inline-block sm:mt-0 text-white ml-4 font-medium float-right sm:float-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 19"
            >
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                className="fill-current"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/imamu__room/?hl=en" target="_blank"
            className="block mt-4 sm:inline-block sm:mt-0 text-white ml-2 font-medium float-right sm:float-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 26 21"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                className="fill-current"
              />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Imamuroom/" target="_blank"
            className="block mt-4 sm:inline-block sm:mt-0 text-white ml-1  font-medium float-right sm:float-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 26 21"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                className="fill-current"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* End of Nav Options */}
    </nav>
  );
}
