import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  const inputId = useId();
  const handleChange = (e) => {
    onChangeFilter(e.target.value.trim());
  };
  return (
    <div className={css.box}>
      <label htmlFor={inputId}>Find contact by name</label>
      <input
        className={css.input}
        id={inputId}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
