import TableToolbar from "./TableToolbar";
import { BsThreeDots } from "react-icons/bs";

const AllBooks = () => {
  return (
    <div className="text-white py-10 container mx-auto space-y-2 h-screen">
      <TableToolbar />
      <div className="flex border border-gray-500 rounded">
        <table className="w-full min-w-max text-left ">
          <thead>
            <tr className="border-b border-gray-500">
              <th className="py-1 px-2 w-8 text-center">
                <input type="checkbox" />
              </th>
              <th className="py-1 px-2">Title</th>
              <th className="py-1 px-2">Author</th>
              <th className="py-1 px-2 w-24">Genre</th>
              <th className="py-1 px-2 w-24">Publication</th>
              <th className="py-1 px-2 "></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-500 text-gray-400 capitalize">
              <td className="py-1 px-2 w-8 text-center">
                <input type="checkbox" />
              </td>
              <td className="py-3 px-2">Productive Muslim</td>
              <td className="py-3 px-2">Faris Mohammod</td>
              <td className="py-3 px-2">Islamic</td>
              <td className="py-3 px-2">2016</td>
              <td className="py-3 px-2 text-center">
                 <button><BsThreeDots /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllBooks;
