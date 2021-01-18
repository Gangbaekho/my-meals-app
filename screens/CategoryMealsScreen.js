import React from "react";
import { View, Text, FlatList } from "react-native";

// Global state에는 여러개의 state가 들어가 있다.
// 하지만 다 사용할게 아니라면 이렇게 useSelector를 이용해서
// 특정 state만 뽑아오는게 더 효율적이라고 말하는 것 같다.
// 뭐 다른 방법으로는 connect  뭐 이런걸 이용해서 할 수도 있지만
// 여기서는 그냥 useSelector를 쓰도록 한다.
import { useSelector } from "react-redux";

// 여기서는 MEALS를 직접 넣어서 했찌만.
// 이제는 store에 있는 meals를 이용할 것이기 떄문에 MEALS를 뺴준
// import { CATEGORIES, MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  // 여기에서 state.meals 를 쓴것이 중요하다.
  // 물론 여기에서는 meals reducer 하나만 쓰기 때문에 크게 문제가 될 것은 없지만.
  // 여러개의 reducer를 쓴다면은 어떤 reducer에 관련된, 즉 어떤 state를 쓸 것인지
  // 이런식으로 고르면 된다는 그런 말이다.
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  console.log(selectedCategory);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
