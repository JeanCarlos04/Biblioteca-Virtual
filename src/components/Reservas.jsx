import { GrInstagram } from "react-icons/gr";
import { HiBell, HiHome } from "react-icons/hi2";
import { FaBookBookmark, FaStar } from "react-icons/fa6";
import { TbDoorExit } from "react-icons/tb";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { supabase } from "../supabase/dataClient";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextLibrary } from "../contexts/ContextLibrary";

export function Reservas() {
  const { reservedBooks, removeReservedBook, user } = useContext(ContextLibrary);
  const navigate = useNavigate();
  const [btnStates, setBtnStates] = useState(new Array(reservedBooks.length).fill(true));

  const handleBtn = (index) => {
    const updatedStates = [...btnStates];
    updatedStates[index] = !updatedStates[index];
    setBtnStates(updatedStates);
  };

  const deleteCard = (index) => {
    const bookId = reservedBooks[index].id; 
    removeReservedBook(bookId); 
  };

  const navigateToHome = () => {
    navigate('/menu');
  };

  const handleBoth = (index) => {
    handleBtn(index);
    saveReserve(reservedBooks[index].id);
  }

  const saveReserve = async (bookId) => {
    const { data, error } = await supabase
      .from('Reservas')
      .insert([
        { id: bookId, Id_Usuario: user.id },
      ])
      .select()
  }

  return (
    <>
      <form>
        <nav className="nav-class nav-reserve">
          <div className="nav"></div>
          <div className="search search-reserve">
            <input
              name="book"
              className="input-nav"
              type="search"
              placeholder="Search..."
            />
            <button type="button" className="btn-nav">
              <FaSearch />
            </button>
          </div>
        </nav>
      </form>

      <aside className="aside-container">
        <div className="div-logo">
          <img className="logo" src="../svg/logo.png" />
          <h1 className="menu-title">
            Book<span className="span-verse">Verse</span>
          </h1>
        </div>

        <div className="div-container1">
          <hr style={{ border: "none", borderTop: "2px solid #f2f2f2" }} className="hr-line" />
          <h1 className="dashboard-title">My Dashboard</h1>
          <HiHome className="icon-home" />
          <button onClick={() => navigateToHome()} className="btn-aside">Home</button>
          <FaBookBookmark className="icon-book" />
          <button className="btn-aside">My Books</button>
          <FaStar className="icon-star" />
          <button className="btn-aside">Like books</button>
          <HiBell className="icon-bell" />
          <button className="btn-aside">Alerts</button>
        </div>
        <div className="div-container2">
          <hr style={{ marginRight: "38px", border: "none", borderTop: "2px solid #f2f2f2" }} className="hr-line" />
          <h1 className="contact-title">Log out</h1>
          <button className="btn-logout">
            <TbDoorExit className="icon-logout" />
          </button>
        </div>
      </aside>

      <section className="section-reserve">
        {reservedBooks.map((book, index) => (
          <article className="article-reserve" key={index}>
            <img className="img-reserve" src={book.volumeInfo.imageLinks?.thumbnail || "ruta/por/defecto.jpg"} />
            <div className="div-content">
              <h1 className="title-h1">{book.volumeInfo.title}</h1>
              <input className="date-re" type="date" />
              <input className="date-time" type="datetime-local" />
              {btnStates[index] && (
                <select className="select-date">
                  <option>3 dias</option>
                  <option>1 semana</option>
                  <option>2 semanas</option>
                </select>
              )}
            </div>
            <div className="div-buttons">
              <button
                onClick={() => handleBoth(index)}
                className="btn-reser">
                Reserve
              </button>
              <button onClick={() => deleteCard(index)} className="btn-delete"> 
                Delete 
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}