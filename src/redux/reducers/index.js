import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import materiasReducer from './materiasReducer'
import personasReducer from './personasReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  personas: personasReducer,
  materias: materiasReducer
})

export default rootReducer