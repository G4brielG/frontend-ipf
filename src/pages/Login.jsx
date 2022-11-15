import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/loginActions'

const Login = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()

  const pruebaRedux = () => {
    const datos = {
      correo: "si@gmail.com",
      clave: "laweafomeql",
    }
    console.log(datos)
    dispatch(login(datos))
  }
  return (
    <>
      <section className="vh-lg-100 mt-6 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="col-12 d-flex align-items-center justify-content-center mt-5">
            <form className="form border  rounded p-3 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
              <div className="text-center text-md-center mb-4 mt-md-0 animate__animated animate__pulse">
                <h1>INICIAR SESION</h1>
              </div>

              <div className="form-group mb-4">
                <div className="input-group">
                  <span className="input-group-text px-3" id="basic-addon1">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="usuario"
                    id="usuario"
                    name="usuario"
                    autoFocus
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <div className="input-group">
                  <span className="input-group-text px-3" id="basic-addon2">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="usuario"
                    id="usuario"
                    name="usuario"
                    required
                  />
                </div>
              </div>

              <div className="d-grid">
                <button className="btn btn-primary" onClick={pruebaRedux}>
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login