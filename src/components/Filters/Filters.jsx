import css from "./Filters.module.css";
import sprite from "../../assets/icons.svg";
import clsx from "clsx";
import {
  selectTypeFilter,
  selectEquipmentFilter,
} from "../../redux/filters/selectors";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTypeFilter,
  changeEquipmentFilter,
} from "../../redux/filters/slice";

const Filters = ({ title, filters, onlyOneItem }) => {
  const labelToValue = {
    AC: "ac",
    Automatic: "transmission",
    Kitchen: "kitchen",
    TV: "tv",
    Bathroom: "bathroom",
    Van: "panelTruck",
    "Fully Integrated": "fullyIntegrated",
    Alcove: "alcove",
  };

  const dispatch = useDispatch();
  const typeFilter = useSelector(selectTypeFilter);
  const equipmentFilter = useSelector(selectEquipmentFilter);

  const buildButtonClass = (currentFilter) => {
    if (onlyOneItem) {
      return clsx(css.filterItem, typeFilter === currentFilter && css.selected);
    } else {
      return clsx(
        css.filterItem,
        equipmentFilter.includes(currentFilter) && css.selected
      );
    }
  };

  const handleClick = (currentFilter) => {
    if (onlyOneItem) {
      if (typeFilter === currentFilter) {
        dispatch(changeTypeFilter(""));
      } else {
        dispatch(changeTypeFilter(currentFilter));
      }
    } else {
      if (equipmentFilter.includes(currentFilter)) {
        dispatch(
          changeEquipmentFilter(
            equipmentFilter.filter((filter_i) => filter_i !== currentFilter)
          )
        );
      } else {
        dispatch(changeEquipmentFilter([...equipmentFilter, currentFilter]));
      }
    }
  };

  return (
    <div className={css.filtersContainer}>
      <h3 className={css.title}>{title}</h3>
      <div className={css.separatorLine}></div>
      <ul className={css.filters}>
        {filters.map((filter, index) => (
          <li key={index}>
            <button
              className={buildButtonClass(labelToValue[filter])}
              onClick={() => handleClick(labelToValue[filter])}
            >
              <svg width="32" height="32">
                <use href={`${sprite}#${labelToValue[filter]}`} />
              </svg>
              <p className={css.filterItemTitle}>{filter}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
