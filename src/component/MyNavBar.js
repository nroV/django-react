import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

import { FaPagelines } from "react-icons/fa6";
import CustomSearch from "./CustomSearch";

function MyNavBar() {
  return (
    <Navbar
      expand="lg"
      className="p-3 sticky-top"
      style={{
        backgroundColor: "black",
      }}
    >
      <Container
        className=""
        style={{
          backgroundColor: "black",
        }}
      >
        {/* <Navbar.Brand href="/"><FaPagelines/> Create Product</Navbar.Brand> */}
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
          <li class="nav-item text-white">
            <img
              src="/logo-white.png"
              alt=""
              srcset=""
              className=""
              style={{
                width: "190px",
                height: "70px",
                objectFit: "cover",
              }}
            />
          </li>

          <li class="nav-item text-white mx-2">
            <Link class="navlink text-white fw-bold fs-5 text-decoration-none" aria-current="page" to ={'/'}>
              Home
            </Link>
          </li>
          <li class="nav-item text-white mx-2">
            <Link class="navlink text-white fw-bold fs-5 text-decoration-none"to ={'/form'}>
              Create
            </Link>
          </li>
        </ul>

        <div className="languague-picker">
        <form class="d-flex" role="search">
     <CustomSearch placeholder={'searchs for product....'} width = {600} />
      
      </form>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
