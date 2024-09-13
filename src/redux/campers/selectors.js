import { createSelector } from 'reselect';

// Основний селектор для отримання стану camper
const getCampersState = (state) => state.campers;

// Мемоізовані селектори
export const selectFilteredCampers = createSelector(
  [getCampersState],
  (campersState) => campersState.items.slice(0, 4 * campersState.currentPage)
);

export const selectLoading = createSelector(
  [getCampersState],
  (campersState) => campersState.loading
);

export const selectError = createSelector(
  [getCampersState],
  (campersState) => campersState.error
);

export const selectCurrentPage = createSelector(
  [getCampersState],
  (campersState) => campersState.currentPage
);

export const selectIsLastPage = createSelector(
  [getCampersState],
  (campersState) => campersState.isLastPage
);

export const selectCurrentCamper = createSelector(
  [getCampersState],
  (campersState) => campersState.currentCamper
);

export const selectFavorites = createSelector(
  [getCampersState],
  (campersState) => campersState.favorites
);

export const selectOpenFeatures = createSelector(
  [getCampersState],
  (campersState) => campersState.openFeatures
);

export const selectBooking = createSelector(
  [getCampersState],
  (campersState) => campersState.booking
);
