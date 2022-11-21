import { FETCH_PERSONAS, FETCH_PERSONAS_OK, FETCH_PERSONAS_FAILED } from '../types'
import { SERVER } from '../../services'

export const fetchPersonas = () => {
  return {
    type: FETCH_PERSONAS
  }
}

export const fetchOK = (personas) => {
  return {
    type: FETCH_PERSONAS_OK,
    payload: [
      personas
    ]
  }
}

export const fetchFailed = (message) => {
  return {
    type: FETCH_PERSONAS_FAILED,
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