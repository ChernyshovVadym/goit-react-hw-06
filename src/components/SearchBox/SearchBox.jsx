// import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilters } from "../../redux/selectors";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  // const inputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  console.log(filter);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.box}>
      {/* <label htmlFor={inputId}>Find contact by name</label> */}
      <input
        className={css.input}
        // id={inputId}
        placeholder="Find contact by name"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
