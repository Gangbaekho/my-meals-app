import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CatagoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: "white",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const FiltersNavigator = createStackNavigator(
  {
    Fliters: FiltersScreen,
  },

  {
    // FiltersNavigator에서만 동작하는 navigationOptions를 달아줄 수 있다.
    // 이것은 뭐 default 를 무시하거나, Filters에서만 동작하도록 하는 무언가겠찌.
    // navigationOptions: {
    // drawerLabel 이라는 것은 Main Navigator에서 목록의 이름을
    // 바꾸는 것과 관련이 있다. 밑에서도 바꿀 수 있찌만, 뭐 여기서도 바꿀 수 있다.
    // 그런말을 하는 듯 하다.
    // 뭐 이건 적용은 안할거고 필요할떄 알아서 바꾸면 된다 이거다.
    // 그런데 여기서 하기 보다는 그냥 MainNavigator에서 config를 하는 방법을
    // 여기서는 선택했다.
    // drawerLabel: "Filters!!",
    // },
    // FiltersNavigator에다가도 defaultNavigationOptions를 달아줬다.
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    // 여기에 나오는 것들이
    // MainNavigator에 나오는 이름이 되는 것임.
    // 여기 나오는 Key 값들을 바꾸면은 그 이름이 바뀌게 되는 것임.
    MealsFavs: {
      // 이런식으로 조금 수정을 해서 MainNavigator의 목록의
      // 이름을 Root Navigator를 통해서 수정을 했다
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  // 여기는 MainNavigator의 목록에 대해서 더 option을 줄 수 있다는 건데
  // 여기서는 styling에 관한 것을 적용해보았다.
  // 뭐 더 자세한 것은 당연히 docs에 가서 확인을 해봐야겠다.
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
