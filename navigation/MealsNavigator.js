import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Text } from "react-native";

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
  // 여기 나오는 headerStyle은 headerTitle을 포함하고 있는
  // View를 의미한다고 생각하면 된다. 그래서
  // headerTitle에 대한 스타일링을 하려면 다른 property를
  // 이용해야 한다는 것이다.
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  // 이것은 headerTitle 그 자체를 스타일링 하는 것이다.
  // 내가 알기 쉽게 표현하자면은 Text 그 자체를 styling 하는 것이라고
  // 보면 된다. 이건 해당하는 Navigation이 활성화 됐을 시에 styling을 하는 것이라면
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  // 이것은 뒤로가기 버튼에 딸려있는 headerTitle을 스타일링을 할떄
  // 이걸 쓴다는 거다. 꽤나 복잡하네 이거, config가.
  // 근데 이 headerBackTitleStyle은 IOS에만 관련이 있다.
  // 즉 IOS 만 headerBackTitle을 가지고 있다 뭐 그렇게 보면 된다.
  // 실제로 그러하다.
  headerBackTitleStyle: {
    fontFamily: "open-sans",
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
      // 뭐 여기에서도 이렇게 할 수 있다는 것이다.
      // 특이한 것은 JSX를 여기다가 추가할 수 있다는 것 정도 생각을 하면 되겠다.
      // 뭐 그냥 추가로 OS마다 다르게 표현하도록 하였음.
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
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
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const FiltersNavigator = createStackNavigator(
  {
    Fliters: FiltersScreen,
  },

  {
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
          // 이 labelStyle을 새로 추가해줬는데
          // TabNavigator니까 Tab에 관련된 labelStyle을 바꿔준거라고
          // 상식적으로 생각을 하면 되겠음.
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
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
