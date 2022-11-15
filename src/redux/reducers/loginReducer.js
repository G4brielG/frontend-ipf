import {
  FETCH_LOGIN,
  INICIO_SESION_OK,
  INICIO_SESION_FAILED,
  CERRAR_SESION
} from '../types'

const initialState = {
  loading: false,
  user: localStorage.getItem('user'),
  message: []
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
      localStorage.setItem('user', payload)
      return {
        ...state,
        user: payload
      }
    case INICIO_SESION_FAILED:
      return {
        ...state,
        message: payload.message
      }
    case CERRAR_SESION:
      localStorage.removeItem('user')
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}