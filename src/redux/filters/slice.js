import { createSlice } from "@reduxjs/toolkit";

const updateAllFilters = (state) => {
  state.allFilters = {
    locationFilter: state.locationFilter,
    typeFilter: state.typeFilter,
    equipmentFilter: state.equipmentFilter,
  };
};

// Слайс
const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    locationFilter: "",
    typeFilter: "",
    equipmentFilter: [],
    allFilters: {
      locationFilter: "",
      typeFilter: "",
      equipmentFilter: [],
    },
  },
  reducers: {
    // Зміна фільтра за локацією
    changeLocationFilter(state, action) {
      state.locationFilter = action.payload.trim().toLowerCase();
      updateAllFilters(state);
    },
    // Зміна фільтра за типом
    changeTypeFilter(state, action) {
      state.typeFilter = action.payload;
      updateAllFilters(state);
    },
    // Зміна фільтра за обладнанням
    changeEquipmentFilter(state, action) {
      state.equipmentFilter = action.payload;
      updateAllFilters(state);
    },
    // Застосування всіх фільтрів
    applyFilters(state) {
      updateAllFilters(state);
    },
  },
});

export const {
  changeLocationFilter,
  changeTypeFilter,
  changeEquipmentFilter,
  applyFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
