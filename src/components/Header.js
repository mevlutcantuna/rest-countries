import "../styles/Header.scss";

import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../store/action";

const Header = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const changePageFunc = (pageNumber) => {
    dispatch(changePage(pageNumber));
  };

  return (
    <div className="header">
      <span
        onClick={() => changePageFunc(1)}
        className="header__item"
        style={page === 1 ? { backgroundColor: "#16163a" } : {}}
      >
        Search Country By Full Name
      </span>
      <span
        onClick={() => changePageFunc(2)}
        className="header__item"
        style={page === 2 ? { backgroundColor: "#16163a" } : {}}
      >
        Search Countries By Names
      </span>
      <span
        onClick={() => changePageFunc(3)}
        className="header__item"
        style={page === 3 ? { backgroundColor: "#16163a" } : {}}
      >
        Filter Countries By Name
      </span>
    </div>
  );
};

export default Header;
