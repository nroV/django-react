import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaPagelines } from "react-icons/fa6";


function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container>
        <Navbar.Brand href="/"><FaPagelines/> Create Product</Navbar.Brand>
        <h1>welcome to my shop</h1>


      <div className="languague-picker">
        <NavLink to='/allproducts' className='nav-link'>
          <button className="btn btn-secondary">View Product</button>
        </NavLink>
      </div>
      
      </Container> 
    </Navbar>
  );
}

export default MyNavBar;