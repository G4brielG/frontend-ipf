import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../redux/actions/loginActions'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <>
      {/* <nav className="navbar navbar-dark bg-primary" style={{ float: "left"}}>
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav> */}
      <div
        className="bg-white border"
        style={{ margin: 0, padding: 0, marginLeft: 0, marginRight: 550, paddingLeft: 0, paddingRight: 0, float: "left" }}
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush">
            <Link to='/home' className="list-group-item py-2 ripple">
              <i className="fas fa-tachometer-alt fa-fw me-3" style={{ alignItems: "center", textAlign: "center"}}></i>
              <span>IPF</span>
            </Link>
            <Link to='/home' className="list-group-item py-2 ripple">
              <i className="fas fa-home fa-fw me-3"></i>
              <span>Inicio</span>
            </Link>
            <Link to='/personas' className="list-group-item">
              <i className="fas fa-users fa-fw me-3"></i>
              <span>Personas</span>
            </Link>
            <Link to='/personas' className="list-group-item">
              <i className="fas fa-chart-bar fa-fw me-3"></i>
              <span>Materias</span>
            </Link>
            <Link to="/" className="list-group-item" onClick={() => dispatch(cerrarSesion())}>
              <i className="fa-solid fa-right-to-bracket me-3 text-danger"></i>
              <label>Cerrar sesión</label>
            </Link>
            {/* <div style={{ paddingBottom: '100%'}}>

            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
