const initState = {
  data: null,
  page: 1,
  sort: null,
  sortDirection: null,
  isReady: false,
  error: null,
}

export const FETCH_INSTRUMENTS = 'FETCH_INSTRUMENTS';
export const FETCH_INSTRUMENTS_SUCCESS = 'FETCH_INSTRUMENTS_SUCCESS';
export const FETCH_INSTRUMENTS_FAILED = 'FETCH_INSTRUMENTS_FAILED';
export const SET_NO_READY = 'SET_NO_READY';
export const SET_PAGE = 'SET_PAGE';
export const SET_SORT_AND_SORT_DIRECTION = 'SET_SORT_AND_SORT_DIRECTION';

const instruments = (state = initState, action) => {
  switch (action.type) {
    case FETCH_INSTRUMENTS_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        isReady: true,
      };
    case FETCH_INSTRUMENTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isReady: false,
      };
    case SET_NO_READY:
      return {
        ...state,
        isReady: false,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_SORT_AND_SORT_DIRECTION:
      return {
        ...state,
        sort: action.payload.newSort,
        sortDirection: action.payload.newSortDirection,
      };
    default:
      return state;
  }
}

export const fetchInstruments = (page, sort, sortDirection) => ({ type: FETCH_INSTRUMENTS, payload: { page, sort, sortDirection } });
export const fetchInstrumentsSuccess = data => ({ type: FETCH_INSTRUMENTS_SUCCESS, payload: data });
export const fetchInstrumentsFailed = err => ({ type: FETCH_INSTRUMENTS_FAILED, payload: err });
export const setNoReady = () => ({ type: SET_NO_READY });
export const setPage = newPage => ({ type: SET_PAGE, payload: newPage });
export const setSortAndSortDirection = (newSort, newSortDirection) => ({ type: SET_SORT_AND_SORT_DIRECTION, payload: { newSort, newSortDirection } });

export default instruments;