export const initialState = {
  search: '',
  images: [],
  filters: {
    perPage: 50,
  },
  error: '',
  loading: true,
};

export const actionTypes = {
  onLoad: 'ON_LOAD',
  setSearch: 'SET_SEARCH',
  showResults: 'SHOW_RESULTS',
  setFilters: 'SET_FILTERS',
  resetFilters: 'RESET_FILTERS',
}

export const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.onLoad:
      return {
        ...state,
        images: action.payload,
        loading: false,
      }
    case actionTypes.setSearch:
      return {
        ...state,
        search: action.payload,
      }
    case actionTypes.showResults:
      return {
        ...state,
        images: action.payload,
        loading: false,
      }
    case actionTypes.setFilters:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
        loading: false,
      }
    case actionTypes.resetFilters:
      return {
        ...state,
        fiters: {},
      }
    default:
      return state;
  }
}
