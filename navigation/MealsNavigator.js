import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CatagoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

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
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    // 물론 MealsNavigator에는 저기 위에서 navigationOptions를
    // default로 해줘서 해줬지만, 지금은 TabNavigator 안에 nested 되어 있음으로
    // Tab과 관련된 navigationOptions 설정은 여기서 해줘야 한다. 뭐 그렇게 이해가 된다.
    // 지금은 Tab과 관련된 Icon을 해주기 위해서 이러한 일을 하고 있는 것이다.
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          // tinColor라는 것은 저 밑에서 설정한 Colors.accentColor를 가져오게 된다는 것이다.
          // tabInfo라는 것이 두 번쨰 argument와 관련 있는 것이라고 생각된다.
          return (
            // 흠 여기서 JSX를 이용하기 때문에 React를 import 해야 하는 문제가 생겼다.
            // 사실 뭐 문제는 아니지만. 그렇다고..
            // ios-restaurant 같은 경우는 특정 value임. 찾아서 해야 한다는 것이다.
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    // 뭐 여기도 비슷하게 꾸며줬다 정도.
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        // 보다 싶이, 여기에 들어갈 props는 되게 많을 것임.
        // 나중에 doc 찾아서 필요한 것들을 적용해나가면 되겠음.
        tabBarLabel: "Favorites",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  // 이렇게 두 번쨰 argument를 줘가지고 여러가지를 더 config
  // 할 수 있다는 것을 알면 된다.
  // 어떤 property를 적용해야 할지 모른다면은 control + spacebar를 누르면은
  // 쓸 수 있는 property를 적절히 볼 수 있으니까 참고하도록 하자.
  {
    // 뭐 이러한 옵션을 줘서 더 꾸밀 수 있다는 것이다.
    tabBarOptions: {
      // active 되었을때, 글자의 색을 config 할 수 있다는 것임.
      // 왜 Tint 인지는 잘 모르겠지만.
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
