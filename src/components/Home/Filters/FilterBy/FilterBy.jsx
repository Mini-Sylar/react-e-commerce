import "./FilterBy.css";

import "./FilterBy.css";

const FilterBy = () => {
  return (
    <div className="contains-select">
      <div className="select-dropdown">
        <select name="select">
          <option value="Test">Headphone Type</option>
          <option value="Test">Test</option>
          <option value="Test">Test</option>
        </select>
      </div>
      {/*  */}
      <div className="select-dropdown">
        <select name="select">
          <option value="Test">Price</option>
          <option value="Test">Test</option>
          <option value="Test">Test</option>
        </select>
      </div>
      {/*  */}
      <div className="select-dropdown">
        <select name="select">
          <option value="Test">Test</option>
          <option value="Test">Test</option>
          <option value="Test">Test</option>
        </select>
      </div>
    </div>
  );
};
export default FilterBy;
