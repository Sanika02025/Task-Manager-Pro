import { useState } from "react";

function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile">

      <div
        className="profileBtn"
        onClick={() => setOpen(!open)}
      >
        <img
          src="https://ui-avatars.com/api/?name=Sanika&background=2563eb&color=fff"
          alt="profile"
        />

        <div>
          <h4>Sanika</h4>
          <p>Developer</p>
        </div>

        <span>▼</span>
      </div>

      {open && (

        <div className="profileDropdown">

          <div className="menuItem">
            👤 My Profile
          </div>

          <div className="menuItem">
            ⚙ Settings
          </div>

          <div className="menuItem logout">
            🚪 Logout
          </div>

        </div>

      )}

    </div>
  );
}

export default ProfileMenu;