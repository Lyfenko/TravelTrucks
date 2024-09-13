import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <main className={css.main}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.message}>
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link to="/" className={css.button}>
        Back to Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
