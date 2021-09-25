import {
  CHANGE_PAGE,
  GET_FILTER_COUNTRIES_ERROR,
  GET_FILTER_COUNTRIES_LOADING,
  GET_FILTER_COUNTRIES_SUCCESS,
  GET_LIST_COUNTRIES_ERROR,
  GET_LIST_COUNTRIES_LOADING,
  GET_LIST_COUNTRIES_SUCCESS,
  GET_ONE_COUNTRY_ERROR,
  GET_ONE_COUNTRY_LOADING,
  GET_ONE_COUNTRY_SUCCESS,
} from "../constant";
import { instance } from "../../utils/api";
import { errorMessage } from "../../utils/notifications";

export const changePage = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber,
  };
};

export const getOneCountry = (countryName) => async (dispatch) => {
  dispatch({ type: GET_ONE_COUNTRY_LOADING });
  try {
    const response = await instance.get(`/name/${countryName}?fullText=true`);
    dispatch({ type: GET_ONE_COUNTRY_SUCCESS, payload: response.data[0] });
    if (!response.data[0]) {
      errorMessage("Not Found Country.Please Fill Full Name of Country...");
    }
  } catch (err) {
    dispatch({ type: GET_ONE_COUNTRY_ERROR, err: err.message });
    return errorMessage(err.message);
  }
};

export const getListCountries = (countryNames) => async (dispatch) => {
  dispatch({ type: GET_LIST_COUNTRIES_LOADING });

  const names = countryNames.split(",");
  try {
    let listCountries = [];
    for (const item in names) {
      const response = await instance.get(`/name/${names[item].trim()}`);
      listCountries = [...listCountries, response.data];
    }
    dispatch({ type: GET_LIST_COUNTRIES_SUCCESS, payload: listCountries });
  } catch (err) {
    dispatch({ type: GET_LIST_COUNTRIES_ERROR, payload: err.message });
    return errorMessage(err.message);
  }
};

export const getFilterCountries = (filterWord) => async (dispatch) => {
  dispatch({ type: GET_FILTER_COUNTRIES_LOADING });
  try {
    if (filterWord.trim() === "") {
      const response = await instance.get("/all");
      dispatch({ type: GET_FILTER_COUNTRIES_SUCCESS, payload: response.data });
    } else {
      const response = await instance.get(`/name/${filterWord}`);
      dispatch({ type: GET_FILTER_COUNTRIES_SUCCESS, payload: response.data });
    }
  } catch (err) {
    dispatch({ type: GET_FILTER_COUNTRIES_ERROR, payload: err.message });
  }
};
