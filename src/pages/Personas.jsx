import React from "react";
import Navbar from "../layouts/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/loginActions";

const Personas = () => {
  const { loading, personas, message } = useSelector((state) => state.login);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>

        <table className="table table-striped border">
          <thead>
            <tr className="bg-primary opacity-75 text-white">
              <td colSpan={6}><h4 style={{ textAlign: "center" }}>Personas</h4></td>
            </tr>
            <tr>
              <th>Apellidos</th>
              <th>Nombres</th>
              <th>DNI</th>
              <th>Correo</th>
              <th>Detalles</th>
            </tr>
          </thead>
          {loading && (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
          <tbody>
            <tr>
              <td>Gonzalez</td>
              <td>Gabriel</td>
              <td>43807013</td>
              <td>gabriel240901@gmail.com</td>
              <td><button className="btn btn-info"><i class="fa-solid fa-clipboard-list"></i></button></td>
            </tr>
          </tbody>
          {/* {personas.lenght > 0 &&
                  personas.map(() => (
                    <tbody>
                      <tr>
                        <td></td>
                      </tr>
                    </tbody>
                  ))} */}
        </table>
      </div>
    </>
  );
};

export default Personas;
