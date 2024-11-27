// import { useState, useEffect } from "react";
// import { supabase } from "../supabase/dataClient";
// import { HiBell, HiHome } from "react-icons/hi2";
// import { FaBookBookmark, FaStar, FaPeopleGroup } from "react-icons/fa6";
// import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub, FaSearch } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";
// import { Link } from "react-router-dom";

// export function MenuLibrary() {
//   const [user, setUser] = useState(null);

//   // Obtener el usuario desde Supabase
//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data, error } = await supabase.auth.getUser();
//       if (data) {
//         setUser(data.user);
//       } else {
//         console.error('Error obteniendo el usuario:', error);
//       }
//     };

//     fetchUser();
//   }, []);

//   // Función de cierre de sesión
//   const handleLogout = async () => {
//     await supabase.auth.signOut(); // Cerrar sesión
//   };

//   if (!user) {
//     return <div>Cargando...</div>;
//   }

//   return (
//     <>
//       <nav className="nav-class">
//         <ul className="div-li">
//           <li className="list-a"><a className="a-nav" href="#">Todo</a></li>
//           <li className="list-a"><a className="a-nav" href="#">Autor</a></li>
//           <select className="select-generous">
//             <option value="" selected disabled hidden>Géneros</option>
//             <option className="option1">Accion</option>
//             <option className="option1">Aventura</option>
//             <option className="option1">Terror</option>
//             <option className="option1">Romance</option>
//           </select>
//         </ul>
//         <div className="search">
//           <input className="input-nav" type="search" placeholder="Search. . ."></input>
//           <button className="btn-nav"><FaSearch /></button>
//         </div>
//       </nav>

//       <div className="main-container">
//         <aside className="aside-container">
//           <div className="div-logo">
//             <img className="logo" src="../svg/logo.png" alt="Logo"></img>
//             <h1 className="menu-title">Book<span className="span-verse">Verse</span></h1>
//           </div>
//           <div className="div-container1">
//             <hr style={{ border: 'none', borderTop: '2px solid #f2f2f2' }} className="hr-line"></hr>
//             <h1 className="dashboard-title">My Dashboard</h1>
//             <HiHome className="icon-home" />
//             <button className="btn-aside">Home</button>
//             <FaBookBookmark className="icon-book" />
//             <button className="btn-aside">My Books</button>
//             <FaStar className="icon-star" />
//             <button className="btn-aside">Like books</button>
//             <HiBell className="icon-bell" />
//             <button className="btn-aside">Alerts</button>
//           </div>
//           <div className="div-container2">
//             <hr style={{ border: 'none', borderTop: '2px solid #f2f2f2' }} className="hr-line"></hr>
//             <h1 className="contact-title">Contact us</h1>
//             <h5><FaPeopleGroup className="icon-group" /> About us</h5>
//           </div>
//         </aside>
//       </div>

//       <section className="books-container">
//         <h1>Bienvenido, {user.email}</h1> {/* Mostrar el correo del usuario */}
//         <Link to="/" onClick={handleLogout}>Cerrar sesión</Link> {/* Botón para cerrar sesión */}

//         <h1>Most Popular books</h1>
//         <div className="div-MostPopular">
//           <article className="cajaMostPopular"> </article>
//           <article className="cajaMostPopular"></article>
//           <article className="cajaMostPopular"></article>
//         </div>

//         <h1>Most downloaded books</h1>
//         <div className="div-downloads">
//           <article className="caja-downloads"></article>
//           <article className="caja-downloads"></article>
//           <article className="caja-downloads"></article>
//         </div>

//         <h1>Latest updates</h1>
//         <div className="div-latestUpdate">
//           <article className="cajalatestUpdate"></article>
//           <article className="cajalatestUpdate"></article>
//           <article className="cajalatestUpdate"></article>
//         </div>
//       </section>

//       <footer>
//         <div className="footer-col">
//           <h4>products</h4>
//           <ul>
//             <li><a href="#">teams</a></li>
//             <li><a href="#">advertising</a></li>
//             <li><a href="#">talent</a></li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>network</h4>
//           <ul>
//             <li><a href="#">technology</a></li>
//             <li><a href="#">science</a></li>
//             <li><a href="#">business</a></li>
//             <li><a href="#">professional</a></li>
//             <li><a href="#">API</a></li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>company</h4>
//           <ul>
//             <li><a href="#">about</a></li>
//             <li><a href="#">legal</a></li>
//             <li><a href="#">contact us</a></li>
//           </ul>
//         </div>
//         <div className="footer-col">
//           <h4>follow us</h4>
//           <div className="links">
//             <a href="#"><FaFacebook className="logos face-git" /></a>
//             <a href="#"><FaLinkedinIn className="logos" /></a>
//             <a href="#"><FaTwitter className="logos" /></a>
//             <a href="#"><GrInstagram className="logos" /></a>
//             <a href="#"><FaGithub className="logos face-git" /></a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

