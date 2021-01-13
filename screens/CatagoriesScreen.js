import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridItem}>
      {/* models 파일에 있는 Class 형태를 Object가 따르기 떄문에
      title이라는 것을 사용할 수 있다는 것임. */}
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen = (props) => {
  return (
    // 기본적으로 columns의 값은 1인데,
    // 원하는 칼럼의 갯수를 정할 수 있다는 것 정도 새롭게 알면 된다.
    // FlatList를 사용하는건 꽤 여러번 해서 뭐 익숙하긴 하네.
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
