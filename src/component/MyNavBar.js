import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import NavTop from "./NavTop";
import { FaPagelines } from "react-icons/fa6";

import CustomSearch from "./CustomSearch";
import { LogoutUrl } from "../service/constants/ApiUrl";
import { logout } from "../service/action/Auth";
import styles from "../component/MyNavBar.module.css";
function MyNavBar({ isauth, setAuth }) {
  // const linkStyle = {
  //   textDecoration: 'none', // Remove underline
  //   color: 'grey' // Keep the default color
  // };
  const [isloading, setLoading] = useState(true);
  const [iserror, setError] = useState(false);
  const [token, setToken] = useState();
  const navigation = useNavigate();
  async function handlelogout(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await logout(LogoutUrl, token);

      console.log(response.status);

      if (response.ok) {
        const res = await response.json();
        console.log(res);

        localStorage.removeItem("token");
        localStorage.clear();
        setToken(localStorage.getItem("token"));

        navigation("/");
      } else {
        throw new Error("There has been error during communication");
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const t = localStorage.getItem("token");
    if (t) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);
  console.log(isauth);
  return (
    <header
      className="container-fluid sticky-top p-0"
      style={{
        backgroundColor: "black",
      }}
    >
      <NavTop />
      <div
        className="container-fluid"
        style={{
          backgroundColor: "black",
        }}
      >
        <Container
          className="container-fluid"
          style={{
            backgroundColor: "black",
          }}
        >
          <nav
            class="navbar navbar-expand-lg navbar-dark sticky-top"
            style={{
              backgroundColor: "black",
            }}
          >
            <NavLink
              class="bar navlink text-white fw-normal fs-6 text-decoration-none"
              style={{
                textDecoration: "none",
                listStyle: "none",
              }}
              to={"/"}
            >
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
            </NavLink>
            <button
              class="navbar-toggler justify-content-between"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <li class="nav-item text-white mx-2">
                  <NavLink className="bar" aria-current="page" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li class="nav-item text-white mx-2">
                  <NavLink className="bar" to={"/form"}>
                    Create
                  </NavLink>
                </li>
                <li class="nav-item text-white mx-2">
                  <NavLink className="bar" to={"/product"}>
                    All Products
                  </NavLink>
                </li>

                {isauth === false ? (
                  <>
                    <li class="nav-item text-white mx-2">
                      <NavLink className="bar" to={"/login"}>
                        Login
                      </NavLink>
                    </li>
                    <li class="nav-item text-white mx-2">
                      <NavLink className="bar" to={"/register"}>
                        Register
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li class="nav-item text-white mx-2">
                    <NavLink className="bar" onClick={(e) => handlelogout(e)}>
                      Logout
                    </NavLink>
                  </li>
                )}
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

{
  /* <Navbar
expand="lg"
className="p-3 sticky-top navbar navbar-expand-lg navbar-light bg-light "
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
      <Link class="navlink text-white fw-normal fs-6 text-decoration-none" aria-current="page" to ={'/'}>
        Home
      </Link>
    </li>
    <li class="nav-item text-white mx-2">
      <Link class="navlink text-white fw-normal fs-6 text-decoration-none"to ={'/form'}>
        Create
      </Link>
    </li>
    <li class="nav-item text-white mx-2">
      <Link class="navlink text-white fw-normal fs-6 text-decoration-none"to ={'/product'}>
        All Products
      </Link>
    </li>
    <li class="nav-item text-white mx-2">
      <Link class="navlink text-white fw-normal fs-6 text-decoration-none"to ={'/product'}>
        Login
      </Link>
    </li>
    <li class="nav-item text-white mx-2">
      <Link class="navlink text-white fw-normal fs-6 text-decoration-none"to ={'/product'}>
        Register
      </Link>
    </li>
  </ul>

  <div className="languague-picker">
  <form class="d-flex" role="search">
      <CustomSearch placeholder={'searchs for product....'} width = {600} />

</form>
  </div>
</Container>
  </Navbar> */
}
export default MyNavBar;
