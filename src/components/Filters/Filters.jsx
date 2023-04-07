import FilterBy from "./FilterBy/FilterBy";
import SortBy from "./SortBy/SortBy";

import "./Filters.css";

const Filters = () => {
  return (
    <div className="sub-container">
      <div className="filters-container">
        <FilterBy></FilterBy>
        <SortBy></SortBy>
      </div>
    </div>
  );
};
export default Filters;
