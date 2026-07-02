function SearchBar() {
  return (
    <div className="search">

      <input
        type="text"
        placeholder="Search Tasks..."
      />

      <select>
        <option>All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

    </div>
  );
}

export default SearchBar;