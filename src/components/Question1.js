import { useState } from "react";
import "../styles/Question.scss";
import { Empty } from "antd";

import SearchBar from "./SearchBar";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { getOneCountry } from "../store/action";

import { errorMessage } from "../utils/notifications";

const Question1 = () => {
  const dispatch = useDispatch();
  const [countryName, setCountryName] = useState("");
  const oneCountry = useSelector((state) => state.oneCountry);

  const submit = (e) => {
    e.preventDefault();
    if (countryName.trim() === "") {
      return errorMessage("Please Fill Input...");
    }
    dispatch(getOneCountry(countryName));
  };

  const handleSearchInput = (e) => {
    setCountryName(e.target.value);
  };

  const searchProps = {
    submit,
    handleSearchInput,
    inputValue: countryName,
  };

  return (
    <div className="question">
      <SearchBar searchProps={searchProps} />
      <div className="question__cards">
        {oneCountry ? <Card item={oneCountry} /> : <Empty />}
      </div>
    </div>
  );
};

export default Question1;
