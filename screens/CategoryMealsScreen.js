import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>This is Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

// 일단 여기서 문제는 navigationOptions를 Object로 만들 수 없었다.
// 왜냐하면은 catId를 이용해서 headerTitle을 적어주고 싶었는데
// 그 headerTitle은 동적으로 변하기 때문이였다.
// 동적인 것을 이용해서 navigationOptions을 이용하고 싶을떄는
// 이렇게 함수를 만들어줘서 사용을 하면 된다는 것임.
// 뭐 당연히 정적인것보다 동적인게 더 많이 쓰일테니까
// Object로 하는 것 보다 이렇게 function으로 만들어주는 것을
// 더 많이 사용할 것 같다.
CategoryMealsScreen.navigationOptions = (navigationData) => {
  // 뭐 아래 있는건 test이고 이렇게 접근을 하면 된다는 것을 보여준다 저옫
  // 생각을 하면 되겠지.
  // console.log(navigationData.navigation.getParam("categoryId"));

  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  // 결국엔 이것도 Object를 return하게 되어 있다.
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
