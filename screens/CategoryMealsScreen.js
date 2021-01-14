import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  console.log(catId);

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

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  console.log(selectedCategory);

  return {
    headerTitle: selectedCategory.title,
    // 일단은 이러한 Styling은 기본적으로 동일한데
    // 계속적으로 써주는게 귀찮다는 말이다.
    // 그러기 떄문에 default navigation options and config를
    // 설정 할 수 있도록 사람들이 만들어 놓았다는 거지 뭐.
    // headerStyle: {
    //   backgroundColor: Colors.primaryColor,
    // },
    // headerTintColor: "white",
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
