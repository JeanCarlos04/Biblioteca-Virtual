import { HiBell, HiHome } from "react-icons/hi2";
import { BsFillSave2Fill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { FaBookBookmark, FaStar } from "react-icons/fa6";
import { TbDoorExit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaSearch,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useState, useEffect, useContext  } from "react";
import { ContextLibrary } from "../contexts/ContextLibrary";

export function SearchBooks() {
  const navigate = useNavigate();
  const [handleUserCard, setHandleUserCard] = useState(false);
  const [popover, setPopover] = useState(null);
  const [infoSearch, setInfoSearch] = useState({});
  const { handleLogout, user, addReservedBooks } = useContext(ContextLibrary);

  const fetchBooksAPI = async (value) => {
    const api_key = "AIzaSyDtCwJwn8JypObv5rUCUNP9aiccYr7aLQE";
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=16&key=${api_key}`
      );
      const result = await res.json();
      setInfoSearch(result);
    } catch (error) {
      console.error(error);
    }
  };

   const handleBookReserve = (book) => {
   addReservedBooks(book)
    alert(`El libro "${book.volumeInfo.title}" ha sido reservado.`);
  };

  const navigateMyBooks = () => {
    navigate("/reservas")
  }

  const handlePopover = (id, e) => {
    setPopover(popover === id ? null : id);
  }

  const handleCard = () => {
    setHandleUserCard(!handleUserCard);
  };

  console.log(user);

  const fetchGenreAPI = async (value) => {
    const api_key = "AIzaSyDtCwJwn8JypObv5rUCUNP9aiccYr7aLQE";
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=subject:${value}&maxResults=16&key=${api_key}`
      );
      const result = await res.json();
      setInfoSearch(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooksAPI("java");
  }, []);

  const handleGenreChange = async (e) => {
    const value = e.target.value;
    if (value) {
      await fetchGenreAPI(value);
    }
  };

  const handleBookSearch = async (e) => {
    const value = e.target.value;
    if (value) {
      await fetchBooksAPI(value);
    }
  };

  if (!user) {
    return <div className="div-loading"><h1 className="h1-loading"> Cargando datos...</h1><p className="p-loading">This may take a few minutes, please be patiente.</p></div>;
  }

  return (
    <>
       {popover !== null && (
        <div className="overlay" onClick={() => setPopover(null)} />
      )}

      <form>
        <nav className="nav-class">
         <div className="user-box">
        <img
          onClick={ handleCard }
          src={user.user_metadata.avatar_url}
          alt="User"
          className="user-photo"/>
      </div>

      {handleUserCard && (
        <div className="menu">
          <div className="menu-item">
            <span className="email-box">{user.email}</span>
            <img
              src={user.user_metadata.avatar_url}
              alt="User"
              className="user-photo-inside"/>
            <span className="menu-user-name">Welcome {user.user_metadata.full_name}!</span>
            <button className="perfil-mybooks"> <FaBookBookmark className="menu-book-btn" />My books</button>
            <button className="history-btn" > <BsFillSave2Fill className="menu-history-btn" />My history</button>
            <button className="logout-btn" onClick={() => handleLogout()}>
              <FaSignOutAlt className="btn-close" /> Log out
            </button>
          </div>
        </div>
      )}

        <div className="nav"></div>
          <ul className="div-li">
            <li className="list-a">
              <a className="a-nav" href="#">
                Todo
              </a>
            </li>
            <select
              name="genre"
              className="select-generous"
              onChange={handleGenreChange}
            >
              <option value="">Géneros</option>
              <option value="Drama">Drama</option>
              <option value="Aventura">Aventura</option>
              <option value="Terror">Terror</option>
              <option value="Romance">Romance</option>
            </select>
          </ul>
          <div className="search">
            <input
              name="book"
              className="input-nav"
              type="search"
              placeholder="Search..."
              onChange={handleBookSearch}
            />
            <button type="button" className="btn-nav">
              <FaSearch />
            </button>
          </div>
        </nav>
      </form>

      <div className="main-container">
        <aside className="aside-container">
          <div className="div-logo">
            <img className="logo" src="../../svg/logo.png" />
            <h1 className="menu-title">
              Book<span className="span-verse">Verse</span>
            </h1>
          </div>

          <div className="div-container1">
            <hr
              style={{ border: "none", borderTop: "2px solid #f2f2f2" }}
              className="hr-line"
            ></hr>
            <h1 className="dashboard-title">My Dashboard</h1>
            <HiHome className="icon-home" />
            <button className="btn-aside">Home</button>
            <FaBookBookmark className="icon-book" />
            <button onClick={() => navigateMyBooks()} className="btn-aside">My Books</button>
            <FaStar className="icon-star" />
            <button className="btn-aside">Like books</button>
            <HiBell className="icon-bell" />
            <button className="btn-aside">Alerts</button>
          </div>
          <div className="div-container2">
            <hr
              style={{
                marginRight: "38px",
                border: "none",
                borderTop: "2px solid #f2f2f2",
              }}
              className="hr-line"
            />
            <h1 className="contact-title">Log out</h1>
            <button className="btn-logout" onClick={handleLogout}>
              <TbDoorExit className="icon-logout" />
            </button>
          </div>
        </aside>
      </div>

      <section className="search-books-section">
        <div className="search-books-div">
          {infoSearch.items?.map((e) => {
             const isPopoverActive = popover === e.id;
            return (
              <div key={e.id} onClick={() => handlePopover(e.id)} className="div-key">
                <article id="my-popover" className="search-books-article">
                  <div className="div-img">
                    <img
                      src={
                        e.volumeInfo.imageLinks?.thumbnail ||
                        "ruta/por/defecto.jpg"
                      }
                      alt={e.volumeInfo.title}
                      className="img-class"
                    />
                  </div>
                  <div className="data-books">
                    <h1 className="h1-article"> {e.volumeInfo.title} </h1>
                    <div className="labels-container">
                      <div className="data">
                        <span className="eye-icon">&#128065; Views</span>
                        <span> {e.volumeInfo.ratingsCount || 0} </span>
                      </div>
                      <div className="data">
                        <label>
                          <span className="star">&#9733;</span> Rating
                        </label>
                        <span className="rating-number">
                          {e.volumeInfo.averageRating || 0}
                        </span>
                      </div>
                      <div className="data">
                        <span className="page-number">
                          <span className="book-icon">&#128196;</span>Pages
                        </span>
                        <span> {e.volumeInfo.pageCount} </span>
                      </div>
                    </div>
                    <p className="p-description">
                      {e.volumeInfo.description || "No cuenta con descripcion."}
                    </p> 
                  </div>
                </article>

                  {isPopoverActive && (
                  <article onClick={(e) => e.stopPropagation()} className="article-popover">
                  <div className="div-img">
                    <img
                      src={
                      e.volumeInfo.imageLinks?.thumbnail ||"ruta/por/defecto.jpg"}
                      alt={e.volumeInfo.title}
                      className="img-class"/>
                  </div>
                  <div className="data-popover">
                    <h1 className="h1-article"> {e.volumeInfo.title} </h1>
                    <div className="labels-popover">
                      <div className="data">
                        <span className="eye-icon">&#128065; Views</span>
                        <span> {e.volumeInfo.ratingsCount || 0} </span>
                      </div>
                      <div className="data">
                        <label>
                          <span className="star">&#9733;</span> Rating
                        </label>
                        <span className="rating-number">
                          {e.volumeInfo.averageRating || 0}
                        </span>
                      </div>
                      <div className="data">
                        <span className="page-number">
                          <span className="book-icon">&#128196;</span>Pages
                        </span>
                        <span> {e.volumeInfo.pageCount} </span>
                      </div>
                       <div className="data">
                         <button onClick={() => handleBookReserve(e)} className="reserve-popover">Reserve</button> 
                       </div>
                    </div>
                    <p className="p-description">
                      {e.volumeInfo.description || "No cuenta con descripcion."}
                    </p> 
                  </div>
                </article> 
              )}
              </div>
            );
          })}
        </div>
      </section>
   

   {/* Footer */}
      <footer>
        <div className="footer-col">
          <h4>products</h4>
          <ul>
            <li>
              <a href="#">teams</a>
            </li>
            <li>
              <a href="#">advertising</a>
            </li>
            <li>
              <a href="#">talent</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>generos</h4>
          <ul>
            <li>
              <a href="#">technology</a>
            </li>
            <li>
              <a href="#">science</a>
            </li>
            <li>
              <a href="#">ciencia ficcion</a>
            </li>
            <li>
              <a href="#">accion</a>
            </li>
            <li>
              <a href="#">aventura</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="links">
            <a href="#">
              <FaFacebook className="logos face-git" />
            </a>
            <a href="#">
              <FaLinkedinIn className="logos" />
            </a>
            <a href="#">
              <FaTwitter className="logos" />
            </a>
            <a href="#">
              <GrInstagram className="logos" />
            </a>
            <a href="#">
              <FaGithub className="logos face-git" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
