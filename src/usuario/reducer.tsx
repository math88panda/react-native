import Usuario from './interface'

const defaultState = {
  data: Usuario    
}

export default (state = defaultState, action) => {
  const { type, payload } = action
  switch (type) {
    default:
      return {...state}
  }
}
