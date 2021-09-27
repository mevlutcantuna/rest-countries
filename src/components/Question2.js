import { useState } from "react";
import "../styles/Question.scss";

import SearchBar from "./SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { getListCountries } from "../store/action";

import { errorMessage } from "../utils/notifications";

import Card from "./Card";
import { Empty } from "antd";

const Question2 = () => {
  const [countryNames, setCountryNames] = useState("");
  const dispatch = useDispatch();
  const listCountries = useSelector((state) => state.listCountries);

  const handleSearchInput = (e) => {
    setCountryNames(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (countryNames.trim() === "") {
      return errorMessage("Please Fill Input...");
    }
    dispatch(getListCountries(countryNames));
  };

  const searchProps = {
    submit,
    handleSearchInput,
    inputValue: countryNames,
  };

  return (
    <div className="question">
      <SearchBar searchProps={searchProps} />
      <span className="question__warning">
        * Put a Comma in the Name of the Country's Name
      </span>
      <div className="question__cards">
        {listCountries[0]?.status !== 404 ? (
          listCountries.map((item, index) => (
            <Card item={item[0]} key={index} />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Question2;
