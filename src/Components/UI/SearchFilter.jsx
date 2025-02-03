/* eslint-disable react/prop-types */
const SearchFilter = ({search, setSearch, filter, setFilter}) => {
  const inputHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const selectHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  console.log(search, filter);

  return (
    <>
      <section className="section-searchFilter container container-card search-filter-shadow">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Bar"
          value={search}
          onChange={inputHandler}
        />
        <div>
          <select
            className="select-section"
            value={filter}
            onChange={selectHandler}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default SearchFilter;
