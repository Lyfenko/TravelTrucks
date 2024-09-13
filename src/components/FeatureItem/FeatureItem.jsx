import css from "./FeatureItem.module.css";
import sprite from "../../assets/icons.svg";
import {toTitleCase} from "../../helpers/formatUtils.js";
import clsx from "clsx";

const buildDivClass = (adjustColor) => {
  return clsx(css.featureItem, adjustColor && css.adjustedColor);
};

const FeatureItem = ({ value, label, adjustColor }) => {
  return (
    <div className={buildDivClass(adjustColor)}>
      <svg width="20" height="20">
        <use href={`${sprite}#${value}`} />
      </svg>
      <p>{toTitleCase(label)}</p>
    </div>
  );
};

export default FeatureItem;
