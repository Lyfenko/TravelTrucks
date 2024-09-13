import css from "./FeatureItemsList.module.css";
import FeatureItem from "../FeatureItem/FeatureItem";

const FeatureItemsList = ({ data, adjustColor = false }) => {
  return (
    <div className={css.featureItems}>
      <FeatureItem
        value="transmission"
        label={data.transmission}
        adjustColor={adjustColor}
      />
      <FeatureItem
        value="engine"
        label={data.engine}
        adjustColor={adjustColor}
      />
      {data.AC && (
        <FeatureItem value="ac" label="AC" adjustColor={adjustColor} />
      )}
      {data.bathroom && (
        <FeatureItem
          value="bathroom"
          label="bathroom"
          adjustColor={adjustColor}
        />
      )}
      {data.kitchen && (
        <FeatureItem
          value="kitchen"
          label="kitchen"
          adjustColor={adjustColor}
        />
      )}
      {data.TV && (
        <FeatureItem value="tv" label="TV" adjustColor={adjustColor} />
      )}
      {data.radio && (
        <FeatureItem value="radio" label="radio" adjustColor={adjustColor} />
      )}
      {data.refrigerator && (
        <FeatureItem
          value="refrigerator"
          label="refrigerator"
          adjustColor={adjustColor}
        />
      )}
      {data.microwave && (
        <FeatureItem
          value="microwave"
          label="microwave"
          adjustColor={adjustColor}
        />
      )}
      {data.gas && (
        <FeatureItem value="gas" label="gas" adjustColor={adjustColor} />
      )}
      {data.water && (
        <FeatureItem value="water" label="water" adjustColor={adjustColor} />
      )}
    </div>
  );
};

export default FeatureItemsList;
