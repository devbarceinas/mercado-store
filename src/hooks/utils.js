export const reducer = (state, action) => {
  const { type, payload } = action

  switch(type) {
    case 'setProduct':
      return {
        ...state,
        product: payload,
      }
    default: 
      return state
  }
}