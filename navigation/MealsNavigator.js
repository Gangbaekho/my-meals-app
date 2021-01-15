import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
// 뭐 이거 안드로이드를 위해서 Material bottom tabs라는것을 또 깔았음.
// 그리고 OS에 따라서 바꿀꺼니까 Platform이라는 것도 필요해서 추가로
// import 하였음.
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

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

// 이거는 이제 두 곳에 비슷하게 사용될 것이기 때문에
// 따로 뺴줬다. 뭐 어려운거 아님.

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      // 그 탭을 눌렀을떄, Bottom Tabs의 Color를 정할 수 있다는 것임.
      // 뭐 이런 props도 있구나 생각을 하면 된다.
      // 탭마다 특정 색깔을 정해주면은 뭐 더 세련되긴 하겠다.
      // 디자인 적인 팁이니까 뭐 그려려니 해라.
      // 아 그리고 특징적인 것은 저 밑에 shifting이라는 것이 true가 되어야지만
      // 이게 작동됨. 안그러면 의미가 없으니까 나중에 체크해라.
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

// 좀 지저분하긴 한데
// Platform을 이용하여 OS에 따른 다른
// BottonTabNavigator를 이용했다 정도 생각을 하면 되겠음.
// 근데 다행인건 지금 두개의 BottomTabNabigator가 존재하지만.
// 쓰는 방법은 거의 같다는게 참 다행이지.
// 그렇기 때문에 tabScreenConfig를 따로 뺴서, 재사용하겠다는 거임.
// 비슷하긴 한데, 두번째 argument가 좀 다르기 떄문에 그것만 좀 체크를해서
// 알아두면 된다.
// 흠 근데 이거롤 바꾸니까 더블클릭해야지 옮겨짐.
// 버그인가. 나중에 고쳐보도록 하자.
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        // activeTintColor가 아닌거 조심!!
        activeColor: "white",
        // 뭐 이거 하면은 탭을 누를떄 어떤 효과를 주니까
        // 그냥 써라. 나쁘지 않은 것 같다. 뭐 안써도 괜찮은 것 같고.
        // 나중에 실제로 적용을 할 떄 고려해봐라.
        shifting: true,
        // 그리고 추가로 해서 shifting을 하면은 위에
        // tabBarColor가 의미가 있지만, shifting을 false로 할거면은
        // 이런식으로 default color를 정해줘야 한다는 것 까지 알면 된다.
        // barStyle:{
        //   backgroundColor:Colors.primaryColor
        // }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
