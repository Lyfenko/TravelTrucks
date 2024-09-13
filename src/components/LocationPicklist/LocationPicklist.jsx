import css from "./LocationPicklist.module.css";
import sprite from "../../assets/icons.svg";
import clsx from "clsx";
import { selectLocationFilter } from "../../redux/filters/selectors";
import { useSelector, useDispatch } from "react-redux";
import { changeLocationFilter } from "../../redux/filters/slice";

const LocationPicklist = () => {
  const dispatch = useDispatch();
  const locationFilter = useSelector(selectLocationFilter);

  const buildIconClass = () => {
    return clsx(css.mapIcon, locationFilter === "" && css.defaultOption);
  };

  const handleChange = (evt) => {
    dispatch(changeLocationFilter(evt.target.value));
  };

  return (
    <div className={css.locationFilterContainer}>
      <svg width="20" height="20" className={buildIconClass()}>
        <use href={`${sprite}#map`} />
      </svg>
      <input
        onChange={handleChange}
        placeholder="City"
        className={css.filterInput}
      ></input>
    </div>
  );
};

export default LocationPicklist;
