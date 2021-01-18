import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
// 음 여기서 이것을 쓸 수 있는 것으로 보아
// Provider의 자식이면 모두 다 이것을 사용할 수 있는 것으로
// 생각을 하면 될 듯 하다.
import { useSelector } from "react-redux";

const MealList = (props) => {
  // useSelector는 가장 윗단에다가 넣어야 한다는 것을 조심하자
  // renderMealItem 안에다가 넣으면 안된다. 뭐 이건 redux에서 만든
  // 규칙이겠거니 생각을 하면 될 듯.
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    // Favorite 리스트 안에 있는지 여기서 확인을 한다.
    const isFavorite = favoriteMeals.some(
      (meal) => meal.id === itemData.item.id
    );

    console.log(isFavorite);
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              // 마찬가지로 상위 Component에서 미리 확인을 하고
              // MealDetail로 넘겨주기 떄문에
              // 바로바로 로딩이 된다는 그런 말이다.
              isFav: isFavorite,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
