import {
  FETCH_PERSONAS,
  FETCH_PERSONAS_OK,
  FETCH_PERSONAS_FAILED
} from '../types'

const initialState = {
  loading: false,
  personas: [],
  message: null
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case FETCH_PERSONAS:
      return {
        ...state,
        loading: true
      }
    case FETCH_PERSONAS_OK:
      return {
        ...state,
        loading: false,
        personas: payload,
        message: null
      }
    case FETCH_PERSONAS_FAILED:
      return {
        ...state,
        loading: false,
        message: payload.message
      }
    default:
      return state
  }
}