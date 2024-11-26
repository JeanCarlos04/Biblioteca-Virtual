import { FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";
// import { useContext } from "react";
// import { ContextLibrary } from "../contexts/ContextLibrary";

export function UserPerfil() {
  const [handleUserCard, setHandleUserCard] = useState(false);
  // const { user } = useContext(ContextLibrary);

  const handleCard = () => {
    setHandleUserCard(!handleUserCard);
  };

  return (
    <>
      <div onClick={handleCard} className="user-box">
        <img
          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
          alt="User"
          className="user-photo"
        />
        <span className="user-name">Alexander</span>
      </div>

      {handleUserCard && (
        <div className="menu">
          <div className="menu-item">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="menu-photo"
            />
            <span className="menu-user-name">Alexander</span>
          </div>
          <button className="logout-btn">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </>
  );
}
