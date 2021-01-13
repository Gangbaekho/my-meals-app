import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
          // 사실 다른 페이지로 넘어가는 다른 방법이 있긴 함.
          // props.navigation.push를 써도 되긴 함.
          // props.navigation.replace('CategoryMeals');
          // 이렇게 해도 넘어가긴 하는데 문제는, Page 전환 애니메이션이 적용이
          // 안될 뿐 더러, Stack에 쌓이지 않기 때문에, 뒤돌아가기 버튼이
          // 활성화 되지 않는다는 특징이 있다. 그냥 stack에 쌓이지 않고 이동하는
          // 뭐 그런거라고 간단하게 생각을 하면 될 듯.
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

export default CategoriesScreen;
