import { FETCH_LOGIN, INICIO_SESION_OK, INICIO_SESION_FAILED, CERRAR_SESION } from '../types'
import { SERVER } from '../../services'

export const fetchLogin = () => {
  return {
    type: FETCH_LOGIN
  }
}

export const fetchOK = (user) => {
  return {
    type: INICIO_SESION_OK,
    payload: {
      user
    }
  }
}

export const fetchFailed = (error) => {
  return {
    type: INICIO_SESION_FAILED,
    payload: error
  }
}

export const logout = () => {
  return {
    type: CERRAR_SESION
  }
}

export const login = ({correo, clave}) => {
  console.log({ correo, clave })
  return async(dispatch) => {
    try {
      dispatch(fetchLogin())
      const response = await fetch(`${SERVER}/login`, {
        method: 'POST',
        body: JSON.stringify({
          correo: "si@gmail.com",
          clave: "laweafomeql"
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      const result = await response.json()

      result.user === undefined
        ? dispatch(fetchFailed(result.message))
        : dispatch(fetchOK(result.user))
    } catch (error) {
      dispatch(fetchFailed(error))
    }
  }
}

export const cerrarSesion = () => {
  return async(dispatch) => {
    dispatch(logout())
  }
}