import { FaArrowDown } from "react-icons/fa";
import { setSearchTerm } from "../../redux/features/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

const TableToolbar = ({ books }) => {
  const [dropdownItem, setDropDownItem] = useState<string>();
  const { searchTerm } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();
  const closeRef= useRef<HTMLUListElement>();

  // handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // handle filter
  const handleFilter = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch()
  }

  // author
  const authorList = books.map((book) => book.author);
  // genre
  const genreList = books.map((book) => book.genre);
  // publication
  const publicationList = books.map((book) => book.publication);

  const getItemsRemoveDuplicate = (list: string[]) => {
    return [...new Set(list)];
  };

  // outside click
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (closeRef.current && !closeRef.current.contains(e.target)) {
        setDropDownItem(undefined);
      }
    };
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <section className="w-full flex items-center justify-between">
      <div>
        <input
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="dropdown dropdown-hover dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Filter
        </label>
        <ul
          ref={closeRef}
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 m-0 list-none"
        >
          <li className="dropdown-item capitalize">
            <button
              onClick={() => setDropDownItem("author")}
              className="inset-0 capitalize"
            >
              author <FaArrowDown />
            </button>
            <ul
              className={`${
                dropdownItem === "author" ? " dropdown-right" : "hidden"
              } space-y-1 m-0 list-none`}
            >
              {getItemsRemoveDuplicate(authorList as string[]).map((author) => (
                <li
                  key={author}
                  className="cursor-pointer capitalize hover:bg-base-100"
                >
                  {author}
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-item ">
            <button
              onClick={() => setDropDownItem("genre")}
              className="inset-0 capitalize"
            >
              author <FaArrowDown />
            </button>
            <ul
              className={`${
                dropdownItem === "genre" ? " dropdown-right" : "hidden"
              }`}
            >
              {getItemsRemoveDuplicate(genreList as string[]).map((genre) => (
                <li key={genre} className="cursor-pointer capitalize">
                  {genre}
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-item ">
            <button
              onClick={() => setDropDownItem("publication")}
              className="inset-0 capitalize"
            >
              author <FaArrowDown />
            </button>
            <ul
              className={`${
                dropdownItem === "publication" ? " dropdown-right" : "hidden"
              }`}
            >
              {getItemsRemoveDuplicate(publicationList as string[]).map(
                (pub) => (
                  <li key={pub} className="cursor-pointer capitalize">
                    {pub}
                  </li>
                )
              )}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default TableToolbar;
