import { FETCH_LOGIN, INICIO_SESION_OK, INICIO_SESION_FAILED, CERRAR_SESION } from '../types'
import { SERVER } from '../../services'

export const fetchLogin = () => {
  return {
    type: FETCH_LOGIN
  }
}

export const fetchOK = (token) => {
  return {
    type: INICIO_SESION_OK,
    payload: {
      token
    }
  }
}

export const fetchFailed = (message) => {
  return {
    type: INICIO_SESION_FAILED,
    payload: {message}
  }
}

export const logout = () => {
  return {
    type: CERRAR_SESION
  }
}

export const login = ({ correo, clave }) => {
  // console.log({ correo, clave })
  return async(dispatch) => {
    try {
      dispatch(fetchLogin())
      const response = await fetch(`${SERVER}/login`, {
        method: 'POST',
        body: JSON.stringify({
          correo: correo,
          clave: clave
        }),
        headers:{
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      const result = await response.json()

      result.token === undefined
        ? dispatch(fetchFailed(result.message))
        : dispatch(fetchOK(result.token))
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