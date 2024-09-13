import { TailSpin } from "react-loader-spinner";
import PropTypes from "prop-types";
import styles from "./Loader.module.css";

const Loader = ({ size = 80, color = "#4fa94d" }) => {
  return (
    <div className={styles.loaderContainer} role="status" aria-label="Loading...">
      <TailSpin height={size} width={size} color={color} visible={true} />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Loader;
