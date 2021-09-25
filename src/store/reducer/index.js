import {
  CHANGE_PAGE,
  GET_FILTER_COUNTRIES_LOADING,
  GET_FILTER_COUNTRIES_SUCCESS,
  GET_FILTER_COUNTRIES_ERROR,
  GET_LIST_COUNTRIES_ERROR,
  GET_LIST_COUNTRIES_LOADING,
  GET_LIST_COUNTRIES_SUCCESS,
  GET_ONE_COUNTRY_ERROR,
  GET_ONE_COUNTRY_LOADING,
  GET_ONE_COUNTRY_SUCCESS,
} from "../constant";

const initialState = {
  page: 1,
  oneCountry: null,
  listCountries: null,
  filteredCountries: null,
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, page: action.payload };
    case GET_ONE_COUNTRY_SUCCESS:
      return {
        ...state,
        oneCountry: action.payload,
        isLoading: false,
        error: "",
      };
    case GET_ONE_COUNTRY_LOADING:
      return { ...state, isLoading: true, error: "" };
    case GET_ONE_COUNTRY_ERROR:
      return {
        ...state,
        oneCountry: null,
        isLoading: false,
        error: action.payload,
      };
    case GET_LIST_COUNTRIES_SUCCESS:
      return {
        ...state,
        listCountries: action.payload,
        isLoading: false,
        error: "",
      };
    case GET_LIST_COUNTRIES_LOADING:
      return { ...state, isLoading: true, error: "" };
    case GET_LIST_COUNTRIES_ERROR:
      return {
        ...state,
        listCountries: null,
        isLoading: false,
        error: action.payload,
      };
    case GET_FILTER_COUNTRIES_SUCCESS:
      return {
        ...state,
        filteredCountries: action.payload,
        isLoading: false,
        error: "",
      };
    case GET_FILTER_COUNTRIES_LOADING:
      return { ...state, isLoading: true, error: "" };
    case GET_FILTER_COUNTRIES_ERROR:
      return { ...state, filteredCountries: null, isLoading: false, error: "" };
    default:
      return { ...state };
  }
};

export default reducer;
