import { useState, useEffect } from "react";
import "../styles/Question.scss";

import SearchBar from "./SearchBar";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { getFilterCountries } from "../store/action";

import { Pagination } from "antd";

const Question3 = () => {
  const [filterWord, setFilterWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    if (filterWord === "") {
      dispatch(getFilterCountries(filterWord));
    }
  }, [filterWord, dispatch]);

  const handleSearchInput = (e) => {
    setFilterWord(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(getFilterCountries(filterWord));
  };

  function onShowSizeChange(current, pageSize) {
    setPageSize(pageSize);
  }

  const handleChangePage = (page, pageSize) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchProps = {
    submit,
    handleSearchInput,
    inputValue: filterWord,
  };

  return (
    <div>
      <SearchBar searchProps={searchProps} />
      <div className="question__cards">
        {filteredCountries &&
          filteredCountries
            ?.slice((currentPage - 1) * pageSize, pageSize * currentPage)
            .map((item, index) => <Card item={item} key={index} />)}
            
      </div>
      <div className="question__pagination">
        {
          filteredCountries?.length > 6 && <Pagination
          onChange={handleChangePage}
          defaultCurrent={1}
          pageSizeOptions={[6, 12, 18, 24, 30]}
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          total={filteredCountries && filteredCountries.length}
        />
        }
        </div>
    </div>
  );
};

export default Question3;
