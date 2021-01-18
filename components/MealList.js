import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
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
              // 이렇게 MealDetail로 들어가기 전의
              // 상위 component에서 먼저 세팅을 해주고 들어가게 되면은
              // 로딩이 늦어지는 문제를 해결할 수 있다.
              // 미리 그것을 알고 가는 것 이기 떄문이다.
              mealTitle: itemData.item.title,
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
