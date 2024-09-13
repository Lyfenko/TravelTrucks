import FeatureItemsList from "../FeatureItemsList/FeatureItemsList";
import CamperDetail from "../CamperDetail/CamperDetail";
import css from "./CamperFeatures.module.css";

const CamperFeatures = ({ data }) => {
  return (
    <div className={css.feturesContainer}>
      <FeatureItemsList data={data} adjustColor={true} />
      <div className={css.vehicleDetails}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <div className={css.separatorLine}></div>
        <div className={css.vehicleSizesContainer}>
          <CamperDetail name="Form" value={data.form} />
          <CamperDetail name="Length" value={data.length} />
          <CamperDetail name="Width" value={data.width} />
          <CamperDetail name="Height" value={data.height} />
          <CamperDetail name="Tank" value={data.tank} />
          <CamperDetail name="Consumption" value={data.consumption} />
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;