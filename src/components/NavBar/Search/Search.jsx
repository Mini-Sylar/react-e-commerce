import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search Product" />
      <button>
        <MdSearch></MdSearch>
      </button>
    </div>
  );
};
export default Search;
