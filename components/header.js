import Search from "./search";

export default function Header() {
  return (
    <header>
      <div className="flex items-center bg-gray-50 p-6 border-b-4 border-indigo-400">
        <div className="flex items-center flex-shrink-0 text-indigo-400 mr-6">
          <span className="font-semibold text-xl tracking-tight text-indigo-400">
            Recipes
          </span>
        </div>

        <div className="flex-shrink-0 text-indigo-400 mr-3 w-7/12 sm:w-8/12 md:w-9/12">
          <Search />
        </div>
      </div>
    </header>
  );
}
