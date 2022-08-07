import React, { Component } from 'react'  


export class Navbar extends Component {  
  render() {  
      return (  
          <div>

<div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                <small className="ms-4"><i className="fa fa-envelope me-2"></i>info@example.com</small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small>Follow us:</small>
                <a className="text-body ms-3" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-twitter"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-linkedin-in"></i></a>
                <a className="text-body ms-3" href=""><i className="fab fa-instagram"></i></a>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About Us</a>
                    <a href="product.html" className="nav-item nav-link">Products</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="blog.html" className="dropdown-item">Blog Grid</a>
                            <a href="feature.html" className="dropdown-item">Our Features</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                </div>
                <div className="d-none d-lg-flex ms-2">
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-search text-body"></small>
                    </a>
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-user text-body"></small>
                    </a>
                    <a className="btn-sm-square bg-white rounded-circle ms-3" href="">
                        <small className="fa fa-shopping-bag text-body"></small>
                    </a>
                </div>
            </div>
        </nav>
    </div>



            </div>  
        )  
    }  
}  
export default Navbar;
