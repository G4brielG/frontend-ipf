import {
  FETCH_MATERIAS,
  FETCH_MATERIAS_OK,
  FETCH_MATERIAS_FAILED
} from '../types'

const initialState = {
  loading: false,
  materias: [],
  message: null
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_MATERIAS:
      return {
        ...state,
        loading: true
      }
    case FETCH_MATERIAS_OK:
      return {
        ...state,
        loading: false,
        materias: payload,
        message: null
      }
    case FETCH_MATERIAS_FAILED:
      return {
        ...state,
        loading: false,
        message: payload.message
      }
    default:
      return state
  }
}