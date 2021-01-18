export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id) => {
  return {
    type: TOGGLE_FAVORITE,
    id: id,
  };
};

export const setFilters = (filterSetting) => {
  return {
    type: SET_FILTERS,
    filters: filterSetting,
  };
};
