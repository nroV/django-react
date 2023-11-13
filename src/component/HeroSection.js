import React from 'react'

import styles from './HeroSection.module.css'
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function HeroSection() {
  return (
  <>
     <header style={{ paddingLeft: 0 }}>


      <div
        className={`p-5 text-center bg-image ${styles.bgimg}`}
        style={{ 
          // backgroundImage: 
          
          // "url('https://images.unsplash.com/photo-1485518882345-15568b007407?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          
          height: 700,
     


        
        }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white my-5 '>
              <h1 className='mb-3 text-upper fs-1 mb-5'>FINDING CLOTHES THAT MATCH YOUR STYLE</h1>
              <h4 className='mb-3 fw-normal text-left mb-5' style={{ 
                fontSize:'15px'
               }}> 
                Browse throught our diverse range of meticiously crafted garment, design
                to bring out your individuality and cater your style
                
                </h4>

                <bottom className='row g-5 mb-5'>

                  <div className="col-lg-4">
                    <h3>200+</h3>
                    <p className="fs-6">
                      Internation Brand
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h3>100+</h3>
                    <p className="fs-6">
                      High Quality Products
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h3>1200+</h3>
                    <p className="fs-6">
                     Good Service
                    </p>
                  </div>

                </bottom>
              <Link className='btn btn-outline-light btn-lg text-left bg-white text-dark' to={'product'} role='button'>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    
  </>
  )
}
