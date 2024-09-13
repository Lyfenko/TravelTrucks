import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewNowClick = () => {
    navigate("/catalog", { replace: true });
  };

  return (
    <main className={css.heroContainer}>
      <h1 className={css.heroText}>Campers of Your Dreams</h1>
      <h2 className={css.heroSubtitleText}>
        Find everything you want in our catalog
      </h2>
      <button className={css.heroBtn} onClick={handleViewNowClick}>
        View Now
      </button>
    </main>
  );
};

export default HomePage;
