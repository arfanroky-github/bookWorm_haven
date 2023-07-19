import TableToolbar from "./TableToolbar";

const AllBooks = () => {
  return (
    <div>
      <TableToolbar />
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
export default AllBooks;
