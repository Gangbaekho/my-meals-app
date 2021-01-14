import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CatagoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    // 이렇게 Categories도 또한 변경을 해보았다.
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: {
      //   headerTitle: "Meal Categories",
      //   headerStyle: {
      //     backgroundColor: Colors.primaryColor,
      //   },
      //   headerTintColor: "white",
      // },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // 이렇게 그 스크린에 대한 Default navigation options을
      // 줄 수 있다는 것이 point인데 여기서 주나, 거기서 주나
      // 사실 마찬가지처럼 보이긴 하는데, 뭐가 더 있나?
      // 음.. 뭐 같은 파일에서 config를 한다는 것이 장점이라고 하긴 하는데
      // 글쎼다 딱히 엄청난 장점처럼은 느껴지지 않는다.
      // navigationOptions: {
      //   headerStyle: {
      //     backgroundColor: Colors.primaryColor,
      //   },
      //   headerTintColor: "white",
      // },
    },
    MealDetail: MealDetailScreen,
  },
  // 두 번쨰 argument에다가 이러한 것들을 놓을 수 있다는 것도
  // 알아둬야 한다.
  {
    // 이걸 해두면은 각각 screen 마다 일일히 navigationOptions를 정해주지 않아도
    // 이게 동작한다는 그런 말이다.
    // 일단 이게 default이기 떄문에 이게 적용되긴 하는데,
    // 특정 screen에서 설정을 해주면 그게 우선순위가 높아진다 뭐 그렇게 생각하면 됨.
    // 사실 상식적인 내용임.
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: "white",
    },
    // 사실 그리고 이 두번쨰 argument인 object에는 여러가지가 들어 갈 수 있다.
    // 뭐 그거에 대해서는 나중에 document를 참조해서 공부를 하는게 맞다고 생각이 든다.
    // 여기에서는 그냥 defulatNavigationOptions만 생각을 하도록 하자.
    // 예를 들어서 이런게 있긴 함.
    // initialRouteName:'MealDetail' 이라고 지정을 할 수 있는데
    // 설정상 Categories 이게 먼저 나오게 되어 있찌만은.
    // 첫번쨰 라우트 네임을 저렇게 바꿈으로써 처음 나오는 것을 바꿔줄 수 있다는 것이다.
  }
);

export default createAppContainer(MealsNavigator);
