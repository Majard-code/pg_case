const initState = {
  favorites: [],
  numOfFavorites: 0,
}

const InitStateFromLocalStorage = state => {
  try {
    const serialisedState = window.localStorage.getItem('favorites');
    if (!serialisedState) return state;
    return JSON.parse(serialisedState);
  } catch (err) {
    return state;
  }
}

export const ADD_INSTRUMENT = 'ADD_INSTRUMENT';
export const REMOVE_INSTRUMENT = 'REMOVE_INSTRUMENT';

const favorites = (state = InitStateFromLocalStorage(initState), action) => {
  switch (action.type) {
    case ADD_INSTRUMENT:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        numOfFavorites: state.numOfFavorites + 1,
      }
    case REMOVE_INSTRUMENT:
      return {
        ...state,
        favorites: state.favorites.filter(x => x.id !== action.payload),
        numOfFavorites: state.numOfFavorites - 1,
      }
    default:
      return state;
  }
}

export const addInstrument = instrument => ({ type: ADD_INSTRUMENT, payload: instrument })
export const removeInstrument = instrumentId => ({ type: REMOVE_INSTRUMENT, payload: instrumentId })

export default favorites;