import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import { MEALS } from "../data/dummy-data";
// Favorites Meals를 추가하기 위해서는 Dispatch가 필요하기 떄문에
// useDispatch를 추가해주면 된다.
import { useSelector, useDispatch } from "react-redux";
// Dispatch를 사용한다는 것은 결국에는 action을 사용한다는 의미니까
// 사용하고 싶은 action을 import 해줘야 한다.
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);

  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  // 이런식으로 일단은 dispatch라는 것을 만들어준다음에
  // 적절한 곳에 사용을 하면 된다.
  // 한번 intiailize 해주는게 좋겠찌 매번 useDispatch를 호출하는 것 보다.
  const dispatch = useDispatch();

  // 여기서도 useCallback을 사용햇으니까
  // 왜 사용했는지, depencency는 왜 dispatch와 mealId로 했는지에 대해서
  // 생각을 해보면 된다.
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  // 이걸 하는 것은 headerRight에다가 해당 기능을 붙여넣어여 하기 때문에
  // navigation에다가 해당 기능을 넣어주는 것으로 생각을 하면 된다.
  // navigation에 있는 button을 이용하지 않을 것이면 굳이 안해도
  // 되는 것으로 생각된다.
  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
      <Text>List of steps</Text>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  // 위에서 넘겨준 것을 여기로 받은다음에, Icon을 클릭할떄
  // 이것이 발동하게 만들어주면 된다는 것이지.
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          // 여기에서 toggleFavorite를 적용한 모습이다.
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
