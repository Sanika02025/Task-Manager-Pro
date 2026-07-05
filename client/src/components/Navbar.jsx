import "../styles/navbar.css";
import ProfileMenu from "./ProfileMenu";

function Navbar({ setShowForm }) {
  return (
    <nav className="navbar">

      <div className="navLeft">

        <h1>🚀 Task Tracker Pro</h1>

        <p>
          Organize your work efficiently
        </p>

      </div>

      <div className="navRight">

        <button
          className="notificationBtn"
        >
          🔔
        </button>

        <ProfileMenu />

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