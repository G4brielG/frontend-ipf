import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { cerrarSesion } from '../redux/actions/loginActions'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <>
      <nav
        class="d-block  bg-white border"
        style={{ marginRight: '70%' }}
      >
        <div class="position-sticky">
          <div class="list-group list-group-flush">
            <a
              href="#"
              class="list-group-item py-2 ripple"
              aria-current="true"
            >
              <i class="fas fa-tachometer-alt fa-fw me-3" style={{ alignItems: "center", textAlign: "center"}}></i>
              <span>IPF</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"  // active
            >
              <i class="fas fa-home fa-fw me-3"></i>
              <span>Inicio</span>
            </a>
            <a
              href="#"
              class="list-group-item"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Materias</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-chart-pie fa-fw me-3"></i>
              <span>SEO</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-chart-bar fa-fw me-3"></i>
              <span>Orders</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-globe fa-fw me-3"></i>
              <span>International</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-building fa-fw me-3"></i>
              <span>Partners</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-calendar fa-fw me-3"></i>
              <span>Calendar</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-users fa-fw me-3"></i>
              <span>Users</span>
            </a>
            <a
              href="#"
              class="list-group-item py-2 ripple"
            >
              <i class="fas fa-money-bill fa-fw me-3"></i>
              <span>Sales</span>
            </a>
            <Link to="/" className="list-group-item" onClick={dispatch(cerrarSesion())}>
              <i class="fa-solid fa-right-to-bracket me-3 text-danger"></i>
              <label>Cerrar sesión</label>
            </Link>
            <div style={{ paddingBottom: '100%'}}>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
