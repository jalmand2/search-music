import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// npm install react-bootstrap bootstrap
const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
// // import React from 'react';
// import React, { useState } from 'react';


// const Nav = () => {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <>
//       <button 
//             onClick={() => setToggle(!toggle)} 
//             class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//       </button>
//       {toggle && (
//         // <ul class="list-group">
//         //   <li class="list-group-item">An item</li>
//         //   <li class="list-group-item">A second item</li>
//         //   <li class="list-group-item">A third item</li>
//         //   <li class="list-group-item">A fourth item</li>
//         //   <li class="list-group-item">And a fifth one</li>
//         // </ul>
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//     <div class="container-fluid" id="naviePoo">
//       {/* <!-- <a class="navbar-brand" href="#">Navbar</a> --> */}
//       {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button> */}
//       <div class="collapse navbar-collapse" id="navbarNav">
//         <ul class="navbar-nav" id="navPoo">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="#ex">Home</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" href="#ex">Saved Songs</a>
//           </li>
//           {/* <!-- <li class="nav-item">
//             <a class="nav-link" href="#">Login</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link disabled hidden">Logout</a>
//           </li> --> */}
//           <li class="nav-item dropdown">
//             <a class="nav-link dropdown-toggle" href="#ex" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Dropdown
//             </a>
//             <ul class="dropdown-menu" id="dropBox">
//               <li><a class="dropdown-item hidden" href="#ex">My Account</a></li>
//               <li><a class="dropdown-item" href="#ex">FAQ</a></li>
//               <li><hr class="dropdown-divider"></hr></li>
//               <li><a class="dropdown-item" href="#ex">Sign in</a></li>
//             </ul>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav> 
//       )}
//     </>
//   )
// };
//   //   return ( 
       
//   //   <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   //   <div class="container-fluid" id="naviePoo">
//   //     {/* <!-- <a class="navbar-brand" href="#">Navbar</a> --> */}
//   //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   //       <span class="navbar-toggler-icon"></span>
//   //     </button>
//   //     <div class="collapse navbar-collapse" id="navbarNav">
//   //       <ul class="navbar-nav" id="navPoo">
//   //         <li class="nav-item">
//   //           <a class="nav-link active" aria-current="page" href="#ex">Home</a>
//   //         </li>
//   //         <li class="nav-item">
//   //           <a class="nav-link" href="#ex">Saved Songs</a>
//   //         </li>
//   //         {/* <!-- <li class="nav-item">
//   //           <a class="nav-link" href="#">Login</a>
//   //         </li>
//   //         <li class="nav-item">
//   //           <a class="nav-link disabled hidden">Logout</a>
//   //         </li> --> */}
//   //         <li class="nav-item dropdown">
//   //           <a class="nav-link dropdown-toggle" href="#ex" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//   //             Dropdown
//   //           </a>
//   //           <ul class="dropdown-menu" id="dropBox">
//   //             <li><a class="dropdown-item hidden" href="#ex">My Account</a></li>
//   //             <li><a class="dropdown-item" href="#ex">FAQ</a></li>
//   //             <li><hr class="dropdown-divider"></hr></li>
//   //             <li><a class="dropdown-item" href="#ex">Sign in</a></li>
//   //           </ul>
//   //         </li>
//   //       </ul>
//   //     </div>
//   //   </div>
//   // </nav> 
//   // );
//   // };

// export default Nav;