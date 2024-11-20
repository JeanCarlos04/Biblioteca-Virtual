import { HiBell, HiHome } from "react-icons/hi2";
import { FaBookBookmark, FaStar, FaPeopleGroup } from "react-icons/fa6";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub, FaSearch } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

export function SearchBooks() {

  return (
    <>
      <nav className="nav-class">
        <ul className="div-li">
          <li className="list-a"><a className="a-nav" href="#">Todo</a></li>
          <li className="list-a"><a className="a-nav" href="#">Autor</a></li>
          <select className="select-generous">
            <option value="" selected disabled hidden>Géneros</option>
            <option className="option1">Accion</option>
            <option className="option1">Aventura</option>
            <option className="option1">Terror</option>
            <option className="option1">Romance</option>
          </select>
        </ul>
        <div className="search">
          <input className="input-nav" type="search" placeholder="Search. . ."></input>
          <button  className="btn-nav"><FaSearch /></button>
        </div>
      </nav>
                                                                                                              
      <div className="main-container">
        <aside className="aside-container">
          <div className="div-logo">
            <img className="logo" src="../svg/logo.png"></img>
            <h1 className="menu-title">Book<span className="span-verse">Verse</span></h1>
          </div>
          <div className="div-container1">
            <hr style={{ border: 'none', borderTop: '2px solid #f2f2f2' }} className="hr-line"></hr>
            <h1 className="dashboard-title">My Dashboard</h1>
            <HiHome className="icon-home" />
            <button className="btn-aside">
              Home
            </button>
            <FaBookBookmark className="icon-book" />
            <button className="btn-aside">
              My Books
            </button>
            <FaStar className="icon-star" />
            <button className="btn-aside">
              Like books
            </button>
            <HiBell className="icon-bell" />
            <button className="btn-aside">
              Alerts
            </button>
          </div>
          <div className="div-container2">
            <hr style={{ border: 'none', borderTop: '2px solid #f2f2f2' }} className="hr-line"></hr>
            <h1 className="contact-title">Contact us</h1>
            <h5>
              <FaPeopleGroup className="icon-group" />
              About us
            </h5>
          </div>
        </aside>
      </div>

      <section className="search-books-section">
        <div className="search-books-div">
          <article className="search-books-article">
            <div className="div-img">
              <img></img>
            </div>
            <div className="data-books">
              <h1 className="h1-article">John Wick</h1>
              <div className="labels-container">
                <div className="data">
                  <span className="eye-icon">&#128065; Views</span>
                  <span> 1,323</span>
                </div>
                <div className="data">
                  <label><span className="star">&#9733;</span> Votes</label>
                  <span className="rating-number">4.5</span>
                </div>
                <div className="data">
                  <span className="page-number"><span className="book-icon">&#128214;</span>Pages</span>
                  <span>320</span> 
                </div>
              </div>
              <p>
                John Wick, un hombre marcado por la pérdida, regresa al mundo de la violencia cuando unos criminales roban lo único que le quedaba: su perro.
              </p>
            </div>
          </article>
          
          <article className="search-books-article">
            <div className="div2-img">
              <img></img>
            </div>
            <div className="data-books">
              <h1 className="h1-article">La Torre de Cristal</h1>
              <div className="labels-container">
                <div className="data">
                  <span className="eye-icon">&#128065; Views</span>
                  <span>2,103</span>
                </div>
                <div className="data">
                  <label><span className="star">&#9733;</span> Votes</label>
                  <span className="rating-number">3.5</span>
                </div>
                <div className="data">
                  <span className="page-number"><span className="book-icon">&#128214;</span> Pages</span>
                  <span>540</span> 
                </div>
              </div>
              <p>
                La torre de cristal es una novela de suspense y ciencia ficción escrita por J.G. Ballard. La historia sigue a un grupo de personas que se encuentran atrapadas en un rascacielos de lujo, que pronto se convierte en un microcosmos de caos.
              </p>
            </div>
          </article>

          <article className="search-books-article">
            <div className="div3-img">
              <img></img> 
            </div>
            <div className="data-books">
              <h1 className="h1-article">El Juego de la Serpiente</h1>
              <div className="labels-container">
                <div className="data">
                  <span className="eye-icon">&#128065; Views</span>
                  <span> 1,323</span>
                </div>
                <div className="data">
                  <label><span className="star">&#9733;</span> Votes</label>
                  <span className="rating-number">4.5</span>
                </div>
                <div className="data">
                  <span className="page-number"><span className="book-icon">&#128214;</span> Pages</span>
                  <span>320</span> 
                </div>
              </div>
              <p>
                John Wick, un hombre marcado por la pérdida, regresa al mundo de la violencia cuando unos criminales roban lo único que le quedaba: su perro.
              </p>
            </div>
          </article>
          
          <article className="search-books-article">
            <div className="div3-img">
              <img></img>
            </div>
            <div className="data-books">
              <h1 className="h1-article">El juego de la Serpiente 2</h1>
              <div className="labels-container">
                <div className="data">
                  <span className="eye-icon">&#128065; Views</span>
                  <span> 1,323</span>
                </div>
                <div className="data">
                  <label><span className="star">&#9733;</span> Votes</label>
                  <span className="rating-number">4.5</span>
                </div>
                <div className="data">
                  <span className="page-number"><span className="book-icon">&#128214;</span> Pages</span>
                  <span>320</span> 
                </div>
              </div>
              <p>
                John Wick, un hombre marcado por la pérdida, regresa al mundo de la violencia cuando unos criminales roban lo único que le quedaba: su perro.
              </p>
            </div>
          </article>
          
          <article className="search-books-article">
            <div className="div4-img">
              <img></img> 
            </div>
            <div className="data-books">
              <h1 className="h1-article">El ultmo Deseo</h1>
              <div className="labels-container">
                <div className="data">
                  <span className="eye-icon">&#128065; Views</span>
                  <span> 1,323</span>
                </div>
                <div className="data">
                  <label><span className="star">&#9733;</span> Votes</label>
                  <span className="rating-number">4.5</span>
                </div>
                <div className="data">
                  <span className="page-number"><span className="book-icon">&#128214;</span> Pages</span>
                  <span>320</span> 
                </div>
              </div>
              <p>
                John Wick, un hombre marcado por la pérdida, regresa al mundo de la violencia cuando unos criminales roban lo único que le quedaba: su perro.
              </p>
            </div>
          </article>

          <article className="search-books-article">
            <div>   
              <article className="search-books-article">
                <div className="div5-img">
                  <img></img> 
                </div>
                <div className="data-books">
                  <h1 className="h1-article">El Pinguino</h1>
                  <div className="labels-container">
                    <div className="data">
                      <span className="eye-icon">&#128065; Views</span>
                      <span> 1,323</span>
                    </div>
                    <div className="data">
                      <label><span className="star">&#9733;</span> Votes</label>
                      <span className="rating-number">4.5</span>
                    </div>
                    <div className="data">
                      <span className="page-number"><span className="book-icon">&#128214;</span> Pages</span>
                      <span>320</span> 
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a pariatur, dolore commodi veritatis quis aspernatur tempore exercitationem ipsam perspiciatis nemo nulla ullam aliquam iusto minus temporibus, tempora optio in?
                  </p>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>
     
      <footer>
        <div className="footer-col">
          <h4>products</h4>
          <ul>
            <li><a href="#">teams</a></li>
            <li><a href="#">advertising</a></li>
            <li><a href="#">talent</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>generos</h4>
          <ul>
            <li><a href="#">technology</a></li>
            <li><a href="#">science</a></li>
            <li><a href="#">ciencia ficcion</a></li>
            <li><a href="#">accion</a></li>
            <li><a href="#">aventura</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="#">about</a></li>
            <li><a href="#">legal</a></li>
            <li><a href="#">contact us</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="links">
            <a href="#"><FaFacebook className="logos face-git"/></a>
            <a href="#"><FaLinkedinIn className="logos"/></a>
            <a href="#"><FaTwitter className="logos"/></a>
            <a href="#"><GrInstagram className="logos"/></a>
            <a href="#"><FaGithub className="logos face-git"/></a>
          </div>
        </div>
      </footer>
    </>
  );
}
