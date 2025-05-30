import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";

const SearchBox = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.search}>
      <span className={s.searchElem}>Find contacts by name</span>
      <input
        className={s.searchElem}
        value={value}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
