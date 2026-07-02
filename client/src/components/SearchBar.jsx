function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        margin: "30px 0",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #ddd",
          fontSize: "16px",
        }}
      />

      <select
        style={{
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #ddd",
        }}
      >
        <option>All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
    </div>
  );
}
export default SearchBar;