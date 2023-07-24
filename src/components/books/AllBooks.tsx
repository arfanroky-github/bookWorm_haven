import { useGetAllBooksQuery } from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/hook";
import TablePagination from "./TablePagination";
import TableToolbar from "./TableToolbar";
import { BsThreeDots } from "react-icons/bs";

const AllBooks = () => {
  const { searchTerm, page, limit, sortBy, sortOrder } = useAppSelector(
    (state) => state.book
  );
  const { isLoading, data: books } = useGetAllBooksQuery(undefined);

  if (isLoading) return <div>Loading...</div>;

  console.log(searchTerm)

  return (
    <div className="text-white shadow-lg rounded-md px-4   py-10 container mx-auto space-y-2 h-screen">
      <TableToolbar books={books.data}/>
      <div className="flex border border-gray-500 rounded">
        <table className="w-full min-w-max text-left capitalize">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="py-1 px-2 w-8 text-center">
                <input type="checkbox" />
              </th>
              <th className="py-1 px-2">Title</th>
              <th className="py-1 px-2">Author</th>
              <th className="py-1 px-2 w-36">Genre</th>
              <th className="py-1 px-2 w-24">Publication</th>
              <th className="py-1 px-2 "></th>
            </tr>
          </thead>
          <tbody>
            {books.data.map((book) => (
              <tr key={book.id} className="border-b border-gray-500">
                <td className="py-1 px-2 w-8 text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-1 px-2">{book.title}</td>
                <td className="py-3 px-2">{book.author}</td>
                <td className="py-3 px-2">{book.genre}</td>
                <td className="py-3 px-2">{book.publication}</td>
                <td className="py-3 px-2 text-center">
                  <button>
                    <BsThreeDots />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </div>
  );
};
export default AllBooks;
