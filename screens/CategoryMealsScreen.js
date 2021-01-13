import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  // 여기서는 parameter로 넘겨준 것을 받아야겠지.
  // key값을 적어주면은 그거에 대한 value를 받을 수 있다.
  // 뭐 굉장히 자연스러운 흐름이라고 생각된다.

  const catId = props.navigation.getParam("categoryId");

  // 뭐 id를 받아가지고 그 id에 해당하는 category를 다시 찾는건데.
  // 글쎄다 뭐 두번 일을 하는 것 같지만. 뭐 이렇게 로직을 짤 수도 있다 정도.
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>This is Category Meals Screen</Text>
      {/* 여기서 뭐 찍어봤다. */}
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
