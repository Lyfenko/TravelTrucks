import css from "./RatingLocation.module.css";
import {reformatLocation} from "../../helpers/formatUtils.js";
import sprite from "../../assets/icons.svg";

const RatingLocation = ({ rating, reviewsCount, location }) => {
  return (
    <div className={css.container}>
      <div className={css.ratingContainer}>
        <svg width="16" height="16">
          <use href={`${sprite}#star`} />
        </svg>
        <p className={css.underlineText}>
          {rating}({reviewsCount} Reviews)
        </p>
      </div>
      <div className={css.locationContainer}>
        <svg width="16" height="16">
          <use href={`${sprite}#map`} />
        </svg>
        <p>{reformatLocation(location)}</p>
      </div>
    </div>
  );
};

export default RatingLocation;
