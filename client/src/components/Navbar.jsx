function Navbar({ setShowForm }) {
  return (
    <nav className="navbar">
      <div className="container navTop">

        <div className="navTitle">
          <h1>🚀 Task Tracker Pro</h1>
          <p>Organize your work efficiently</p>
        </div>

        <button
          className="addBtn"
          onClick={() => setShowForm(true)}
        >
          + Add Task
        </button>

      </div>
    </nav>
  );
}

export default Navbar;