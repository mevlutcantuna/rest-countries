import "../styles/SearchBar.scss";

const SearchBar = ({ searchProps }) => {
  const { submit, inputValue, handleSearchInput } = searchProps;

  return (
    <div className="search-bar">
      <form onSubmit={submit} className="search-bar__form">
        <input
          value={inputValue}
          onChange={handleSearchInput}
          type="text"
          className="search-bar__form__input"
        />
        <button type="submit" className="search-bar__form__button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
