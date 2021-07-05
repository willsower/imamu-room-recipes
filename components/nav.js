export default function Home() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-50 p-6">
      <div class="flex items-center flex-shrink-0 text-indigo-400 mr-6">
        <span class="font-semibold text-xl tracking-tight text-indigo-400">
          Recipes
        </span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-indigo-400 hover:border-indigo-400">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-indigo-400 mr-4"
          >
            About
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-400 border-indigo-400 hover:border-transparent hover:text-indigo-500 hover:bg-indigo-400 mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
