import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // 여기서 알아야 할 것은 navigate해서 CategoryMeals로 가긴 갈 건데
          // 특정한 parameters를 전달 할 수 있다는 거임. 저렇게 써준다음에
          // 넘기고 싶은 key / value를 넘겨주면 된다는 것이다.
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// CategoriesScreen.navigationOptions = {
//   headerTitle: "Meal Categories!!!",
//   headerStyle: {
//     backgroundColor: Colors.primaryColor,
//   },
//   headerTintColor: "white",
// };

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
