import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIdex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.id
      );
      if (existingIdex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIdex, 1);
        // 여기서 주의해야 할 것은 ...state 해가지고 모든것을 일단 집어넣고
        // favoriteMeals만 덮어씌운다는 그런 의미이다.
        // 나머지는 뭐 비지니스 로직이기 때문에 신경쓸 필요는 없다.
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.id);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    default:
      return state;
  }
  return state;
};

export default mealsReducer;
