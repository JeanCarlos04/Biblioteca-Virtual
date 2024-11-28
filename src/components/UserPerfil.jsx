import { FaSignOutAlt } from "react-icons/fa";
import { TbDoorExit } from "react-icons/tb";
import { useState } from "react";
import { useContext } from "react";
import { ContextLibrary } from "../contexts/ContextLibrary";

export function UserPerfil() {
  const [handleUserCard, setHandleUserCard] = useState(false);
  const { user, handleLogout } = useContext(ContextLibrary);

  const handleCard = () => {
    setHandleUserCard(!handleUserCard);
  };

  console.log(user);

  return (
    <>
      <div className="user-box">
        <img
          onClick={handleCard}
          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
          alt="User"
          className="user-photo"/>
      </div>

      {handleUserCard && (
        <div className="menu">
          <div className="menu-item">
            <span className="email-box">{user.email}</span>
            <img
              src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
              alt="User"
              className="user-photo-inside"/>
            <span className="menu-user-name">Welcome Alexander!</span>
            <button className="logout-btn" onClick={() => handleLogout()}>
              <FaSignOutAlt className="btn-close" /> Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
}



