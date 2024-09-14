import { useNavigate } from "react-router-dom";
import css from "./CamperItem.module.css";
import sprite from "../../assets/icons.svg";
import { shortenDescription } from "../../helpers/formatUtils.js";
import FeatureItemsList from "../FeatureItemsList/FeatureItemsList";
import RatingLocation from "../RatingLocation/RatingLocation";
import { switchFavorites } from "../../redux/campers/slice";
import { selectFavorites } from "../../redux/campers/selectors";
import { useSelector, useDispatch } from "react-redux";

const CamperItem = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/catalog/${id}`);
  };

  const handleClick = (id) => {
    dispatch(switchFavorites(id));
  };

  return (
    <div className={css.camperItemContainer}>
      <div className={css.imageContainer}>
        {data.gallery && data.gallery.length > 0 ? (
          <img src={data.gallery[0].thumb} alt={`${data.name} thumbnail`} />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className={css.camperItemInfoContainer}>
        <div className={css.header}>
          <div className={css.headerTitle}>
            <h2 className={css.headerTitleText}>{data.name}</h2>
            <div className={css.priceLikeContainer}>
              <p className={css.headerTitleText}>
                &#8364;{typeof data.price === 'number' ? data.price.toFixed(2) : 'N/A'}
              </p>
              <button
                className={css.invisibleButton}
                onClick={() => handleClick(data.id)}
              >
                <svg
                  width="24"
                  height="20"
                  className={
                    favorites.includes(data.id) ? css.redHeart : css.blackHeart
                  }
                >
                  <use href={`${sprite}#heart`} />
                </svg>
              </button>
            </div>
          </div>
          <RatingLocation
            rating={data.rating}
            reviewsCount={data.reviews.length}
            location={data.location}
          />
        </div>
        <p className={css.description}>
          {shortenDescription(data.description)}
        </p>
        <FeatureItemsList data={data} adjustColor={false} />
        <button onClick={() => navigateToDetails(data.id)}>Show more</button>
      </div>
    </div>
  );
};

export default CamperItem;
