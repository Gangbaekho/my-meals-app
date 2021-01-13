import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Meal Detail Screen</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          // 그냥 popToTop을 쓰면은 가장 처음에 나오는
          // Screen으로 돌아간다 뭐 그런 말임.
          // 그냥 처음 화면? 으로 돌아간다 뭐 그런거.
          // 여기서 그냥 pop을 쓴다면은 CategoryMealsScreen 으로 가겠지만
          // 여기서 내가 원하는 것은 CategoriesScreen으로 가는 것 이기 떄문에
          // pop 대신에 popToTop을 썻다는 것 정도? 알아두면 되겠다.
          props.navigation.popToTop();
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

export default MealDetailScreen;
