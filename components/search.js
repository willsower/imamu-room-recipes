import { useCallback, useRef, useState } from "react";
import Link from "next/link";

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <>
      <div className="flex">
        <input
          className="w-full rounded-lg p-2 bg-gray-100 focus:outline-none"
          type="text"
          placeholder="Search..."
          onChange={onChange}
          onFocus={onFocus}
          value={query}
        />
        {/* <button className="bg-gray-200 w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
          <i className="material-icons">search</i>
        </button> */}
      </div>

      { active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ id, title }) => (
            <li className={styles.result} key={id}>
              <Link href="/recipes/[id]" as={`/recipes/${id}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) }
    </>
  );
}
