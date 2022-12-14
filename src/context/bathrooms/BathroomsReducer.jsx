export const BathroomsReducer = (state, action) => {
  switch (action.type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload
      }
    case 'setBathrooms':
      return {
        ...state,
        bathrooms: action.payload
      }
    default:
      return state;
  }
}