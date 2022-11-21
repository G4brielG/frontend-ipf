import { FETCH_MATERIAS, FETCH_MATERIAS_OK, FETCH_MATERIAS_FAILED } from '../types'
import { SERVER } from '../../services'

export const fetchMaterias = () => {
  return {
    type: FETCH_MATERIAS
  }
}

export const fetchOK = (materias) => {
  return {
    type: FETCH_MATERIAS_OK,
    payload: [
      materias
    ]
  }
}

export const fetchFailed = (message) => {
  return {
    type: FETCH_MATERIAS_FAILED,
    payload: { message }
  }
}

export const listarPersonas = ({ token }) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPersonas())
      const response = await fetch(`${SERVER}/personas`, {
        method: 'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "authToken": `${token}`
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