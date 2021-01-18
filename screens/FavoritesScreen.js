import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
// 여기에서도 마찬가지로 MEALS를 직접 쓰지 않고
// Store에 있는 favorites meals를 가져다가 쓸 것이기 떄문에
// 이것을 주석처리 해주는 것이다.
// import { MEALS } from "../data/dummy-data";
// 그 대신에 아래에 있는 것을 import 해줘야 한다.
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = (props) => {
  // 여기에서도 필요한 favorites meals 만을 가져온다는 것에
  // 초점을 맞추면 된다.
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
