function Navbar({ setShowForm }) {
  return (
    <nav
      style={{
        background: "linear-gradient(135deg,#2563eb,#4f46e5)",
        padding: "20px 40px",
        borderRadius: "18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        marginBottom: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,.15)",
      }}
    >
      <div>
        <h1 style={{ fontSize: "32px" }}>
          🚀 Task Tracker Pro
        </h1>

        <p
          style={{
            opacity: ".9",
            marginTop: "5px",
          }}
        >
          Organize your work efficiently
        </p>
      </div>

      <button
        onClick={() => setShowForm(true)}
        style={{
          background: "white",
          color: "#2563eb",
          border: "none",
          padding: "14px 24px",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        + Add Task
      </button>
    </nav>
  );
}

export default Navbar;