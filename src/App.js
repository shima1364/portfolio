// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes,

// } from "react-router-dom";
// import Home from "./portfolioContainer/Home/Home";
// import About from "./portfolioContainer/AboutMe/About";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './portfolioContainer/Home/Header/Header.css';
// import {faBars} from '@fortawesome/free-solid-svg-icons'




// const ScrollableApp = () => {
//   const [showHeaderOption, setHeaderOption] = useState(false)
//   return (
//     <Router>
//         <div className="header-container"
//         on>
//           <nav className="header-parent">
//             <div className="header-hamburger">
//               <FontAwesomeIcon
//                 className="header-hamburger-bars"
//                 icon={faBars} 
//               />
//             </div>
//             <ul
//               className={
//                 showHeaderOption
//                   ? "header-option show-hambergur-option"
//                   : "header-option"
//               }
//             >
//               <li>
//                 <Link to='/' >Home</Link>
//               </li>
//               <li>
//                 <Link to='/about'>About</Link>
//               </li>
              
//             </ul>
//           </nav>
//           <Routes>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           </Routes>
//         </div>
//     </Router>
//   );
// };


// export default ScrollableApp

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import Home from "./portfolioContainer/Home/Home";
// import About from "./portfolioContainer/AboutMe/About";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import './portfolioContainer/Home/Header/Header.css';

// const ScrollableApp = () => {
//   const [showHeaderOption, setHeaderOption] = useState(false);

//   return (
//     <Router>
//       <div className="header-container">
//         <nav className="header-parent">
//           <div className="header-hamburger">
//             <FontAwesomeIcon
//               className="header-hamburger-bars"
//               icon={faBars} 
//             />
//           </div>
//           <ul
//             className={
//               showHeaderOption
//                 ? "header-option show-hambergur-option"
//                 : "header-option"
//             }
//           >
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default ScrollableApp;
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Home from "./portfolioContainer/Home/Home";
// import About from './portfolioContainer/AboutMe/About';

// function App() {
//   return (
//     <Router>
//       <Navbar style={{ backgroundColor: '#24263b' }} variant="dark">
//         <Container>
//           <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "./portfolioContainer/Home/Home";
import AboutMe from "./portfolioContainer/AboutMe/AboutMe";

function ColorSchemesExample() {
  return (
    <Router>
      <Navbar style={{ backgroundColor: '#24263b' }} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">Features</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default ColorSchemesExample;