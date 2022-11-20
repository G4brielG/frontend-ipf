import {
  FETCH_LOGIN,
  INICIO_SESION_OK,
  INICIO_SESION_FAILED,
  CERRAR_SESION
} from '../types'
const initialState = {
  loading: false,
  token: localStorage.getItem('token'),
  message: null
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_LOGIN:
      return {
        ...state,
        loading: true
      }
    case INICIO_SESION_OK:
      localStorage.setItem('token', payload)
      return {
        ...state,
        loading: false,
        message: null,
        token: payload
      }
    case INICIO_SESION_FAILED:
      return {
        ...state,
        loading: false,
        message: payload.message
      }
    case CERRAR_SESION:
      localStorage.removeItem('token')
      return {
        ...state,
        loading: false,
        token: null
      }
    default:
      return state
  }
}