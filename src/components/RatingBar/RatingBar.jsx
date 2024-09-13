import css from './RatingBar.module.css';
import sprite from '../../assets/icons.svg';
import React from "react";

const RatingBar = ({ rating }) => {
  // Генерація масиву зірок на основі рейтингу
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <ul className={css.ratingBarContainer}>
      {stars.map(star => (
        <li key={String(star)}>
          <svg
            width="16"
            height="16"
            className={rating >= star ? css.starColorYellow : css.starColorGray}
          >
            <use href={`${sprite}#star`} />
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(RatingBar);
