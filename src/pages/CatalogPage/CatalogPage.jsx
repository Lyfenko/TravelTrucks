import CampersList from "../../components/CampersList/CampersList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./CatalogPage.module.css";
import LocationPicklist from "../../components/LocationPicklist/LocationPicklist";
import Filters from "../../components/Filters/Filters";
import { applyFilters } from "../../redux/filters/slice";
import { changeCurrentPage } from "../../redux/campers/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(applyFilters());
    dispatch(changeCurrentPage(1));
    dispatch(fetchCampers());
  };

  return (
    <main className={css.catalogPage}>
      <div className={css.filtersSection}>
        <div className={css.locationFilter}>
          <p className={css.filterLabel}>Location</p>
          <LocationPicklist />
        </div>
        <div className={css.featureFilters}>
          <p>Filters</p>
          <Filters
            title="Vehicle equipment"
            filters={["AC", "Automatic", "Kitchen", "TV", "Bathroom"]}
            onlyOneItem={false}
          />
          <Filters
            title="Vehicle type"
            filters={["Van", "Fully Integrated", "Alcove"]}
            onlyOneItem={true}
          />
        </div>
        <button className={css.searchButton} onClick={handleClick}>
          Search
        </button>
      </div>
      <CampersList />
    </main>
  );
};

export default CatalogPage;
