import Search from "./search";

export default function Nav() {
  return (
    <nav>
      <div className="flex items-center bg-gray-50 p-6 border-b-4 border-indigo-400">
        <div className="flex items-center flex-shrink-0 text-indigo-400 mr-6">
          <span className="font-semibold text-xl tracking-tight text-indigo-400">
            Recipes
          </span>
        </div>

        <div className="flex-shrink-0 text-indigo-400 mr-3 w-7/12 sm:w-8/12 md:w-9/12">
          <Search />
        </div>

        <div className="w-full block items-center w-auto">
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-400 border-indigo-400 hover:border-transparent hover:text-indigo-500 hover:bg-indigo-400 mt-0 float-right"
            >
              About
            </a>
          </div>
        </div>
      </div>
      <div className = "flex items-center bg-gray-50 p-4 border-b border-gray-200 w-full custom-horizontal-nav">
        <a>Breakfast</a>
        <a>Lunch</a>
        <a>Dinner</a>
        <a>Dessert</a>
        <a>Bento Boxes</a>
        <a>Vegetarian</a>
        <a>Vegan</a>
        <a>About</a>
      </div>
    </nav>
  );
}
