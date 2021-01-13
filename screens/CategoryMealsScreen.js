import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Category Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          // 뭐 이거 하면은 그냥 Back Button을 누르는거랑 같은데
          // 음.. 기본적으로 제공해주는 Button 에서 하는게 아니라
          // 우리가 만든 Button에다가 적용을 하려면은 그냥 goBack()을
          // 쓰면 된다는 것 같다. 일종의 pop()이랑 비슷하게 작동되는 듯 함.
          props.navigation.goBack();
          // props.navigation.pop() 이걸 써도 된다네.
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
