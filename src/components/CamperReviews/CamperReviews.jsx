import css from "./CamperReviews.module.css";
import RatingBar from "../RatingBar/RatingBar";

const CamperReviews = ({ reviews = [] }) => {
  return (
    <ul className={css.reviewsContainer}>
      {reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.singleReviewContainer}>
            <div className={css.reviewHeader}>
              <div className={css.iconDiv}>
                <p>{review.reviewer_name?.charAt(0) || "N"}</p>
              </div>
              <div className={css.nameDiv}>
                <p>{review.reviewer_name || "Anonymous"}</p>
                <RatingBar rating={review.reviewer_rating || 0} />
              </div>
            </div>
            <p className={css.comment}>{review.comment || "No comment provided"}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
