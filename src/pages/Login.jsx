import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/loginActions'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [form, setForm] = useState({})

  const { loading, token, message } = useSelector((state) => state.login);

  console.log("token", token)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSetForm = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    validaciones && dispatch(login(form))
  }
  
  const validaciones = () => {
    form.correo !== undefined && true
    form.clave !== undefined && true
  }

  useEffect(() => {
    if (token !== null) {
      navigate("/home")
    }
  }, [token])
  return (
    <>
      <section className="vh-100 bg-primary bg-opacity-50">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <form onSubmit={handleSubmit}>
                    <h3 className="mb-5">Iniciar sesión</h3>

                    <div className="form-outline mb-4">
                      <label className="form-label">Correo electrónico</label>
                      <input
                        type="email"
                        name="correo"
                        className="form-control form-control-lg"
                        onChange={handleSetForm}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">Contraseña</label>
                      <input
                        type="password"
                        name='clave'
                        className="form-control form-control-lg"
                        onChange={handleSetForm} />
                    </div>

                    <button className="form-control btn btn-primary btn-lg btn-block d-block my-3" type="submit">{loading ? "Cargando..." : "Enviar"}</button>
                    {
                      message !== null && (
                        <div className="bg-danger text-wrap  d-block p-2 text-white">
                          {message}
                        </div>
                      )
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login