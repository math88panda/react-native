import { createStore, combineReducers } from 'redux'

/* reducers */
import usuarioReducer from '../usuario/reducer'

const allReducers = combineReducers({
  usuarios: usuarioReducer
})

const store = createStore(allReducers)
export default store
