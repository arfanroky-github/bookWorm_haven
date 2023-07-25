const TablePagination = () => {
  return (
    <div className="flex items-center justify-between">
      <select className="select select-bordered w-full max-w-xs">
        <option >
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <div className="join">
        <button className="join-item btn">«</button>
        <button className="join-item btn">Page 22</button>
        <button className="join-item btn">»</button>
      </div>
    </div>
  );
}
export default TablePagination