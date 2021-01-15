import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// 이건 지금 서버랑 연동이 안되어있기 때문에
// Dummy data를 hard coding으로 만든거일 뿐임.
// 나중에 서버처리를 해주면 됨.
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  // 또 이렇게 params를 navigation을 통해서 또 받아오면 된다.
  // React에서는 url을 통해서 뭔가를 하지만
  // 여기는 navigation을 이용한다 라고 생각을 하면 됨.
  // 어짜피 둘다 parameter를 주고 받는건 마찬가지이다.
  // 그냥 방법이 다를 뿐.
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

// 여기서는 또 이거 써가지고 동적으로 뭔가를
// 처리하는 로직을 짤거임.
// 결국엔 뭐 Navigation header를 적절하게 표한하기 위해서
// 저번에 했던 것을 또 그대로 하는 거구나.
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
