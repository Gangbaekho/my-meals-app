import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

// Botton Tab을 만드려면은 이것을 따로 install 해줘야 한다.
// 나는 지금 navigation version 4 이상을 쓰고 있기 때문에 이렇게 했다.
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

// 이렇게 Bottom Tab을 위해서 하나 더 만들어 줘야 한다.
const MealsFavTabNavigator = createBottomTabNavigator({
  // 음.. 위에 있는 stack navigator 처럼 config를 해줄 수 있는데.
  // 일단은 이렇게 위해 있는 Navigator 자체를 적어놓았네, Screen과
  // mapping을 하지 않고 Navigator과 mapping을 했다는 것을 눈여겨 보자.
  Meals: MealsNavigator,
  // 근데 이놈은 또 Screen이랑 Mapping을 해줬다.
  // 이 두 개의 차이점을 적절히 알면은 뭐 이것도 끝나는거지.
  Favorites: FavoritesScreen,
});

// 일단은 MealsFavTabNavigator라는 것이
// 결국에는 Stack Navigator를 포함하고 있는 형태이기 때문에
// 밑에것을 이렇게 지워주고, 저러한 형태로 바꿔야 한다.
// 이런식으로 여러개의 Navigator를 Combine 한다라고 생각을 하면 된다.
// 결국 하나의 Root Navigator만 export를 하는 형태임.
// 뭐 이렇게 까지 하면은 Bottom Tab이 생기긴 했다.
// export default createAppContainer(MealsNavigator);
export default createAppContainer(MealsFavTabNavigator);
