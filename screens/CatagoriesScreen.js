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
      // 원래 View 자체는 Touchable 한게 아니라는 거임.
      // web에서는 원래 모든 Element가 Touchable인것에
      // 반해 여기서는 Touchable 계열을 써줘야지 터치가 가능하다 정도
      // 다시한번 기억해두면 된다.
      // 아 그리고 props라는 것을 쓰기 위해서 이 안으로 옮겼다.
      // 하지만 뭐 이럴바에는 그냥 하나 Component를 만들지 그러냐.
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // 뭐 일단은 누르면은 그거에 맞는 Detail에 가는게 원래 맞지만은
          // 일단은 여기로 가게 만들자.
          props.navigation.navigate({ routeName: "CategoryMeals" });
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

// CategoriesScreen은 Javascript에서 Function이고
// Javascript에서 Function은 곧 Object 이니까
// 이렇게 단순하게 새로운 property를 만들 수 있다는 것이다.
// 이걸 이용하면은 뭐 여러개 바꿀 수 있다는 것 같네.
// 이러한 정보는 navigation이라는 것이 이용하는 것이겠고.
// 뭐 그렇게 단순하게 이해를 하면 될 듯 하다.

// Document가서 또 다른 properties에 대해서
// 알아보고 적용을 하면 더 좋을 것이다.
// 당연히 여기서 다 알려줄 수는 없는 거겠찌.
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories!!!",
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  // TintColor라는거는 그냥 Color랑 같은 거임.
  // 글자색이 바뀌는 거임.
  headerTintColor: "white",
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
