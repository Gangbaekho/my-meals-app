// 이게 엄청 중요함 Navigation을 위한 Config를 얘가 다 가지고 있다고
// 생각을 하면 됨. 일종의 Object로 생각을 해주면 되겠음.
import { createStackNavigator } from "react-navigation-stack";
// 이건 그냥 Wrap을 위해서 만드는 거임. 왜 있는지는 모르겠지만
// 뭐 그렇게 하라니까 하는거지 뭐.
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CatagoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

// 밑에 설정해 놓은게 서로 왔다갔다 할 수 있는
// Screen 이라는 것이다. 다른건 안된다 뭐 그런 말인듯.
// 이게 전반적인 Navigation의 Meta data라고 할 수 있다.
const MealsNavigator = createStackNavigator({
  // 첫번째는 대문자로 써주는게 관습이다.
  // 그냥 따라주도록 하자.
  // 저기다가 Screen Component를 value로 넣어주면 된다.
  // 지금은 사실 가장 간단한 방법으로 Mapping을 해주고 있다.
  // 하지만 좀 더 복잡하게 Mapping을 하는 것도 가능하다.
  Categories: CategoriesScreen,
  // 이렇게 하나의 Object를 더 두어서 할 수도 있다.
  // 근데 얘기 하는거 보니까 screen 이라는게 default라서
  // 나머지랑 같은 역할을 한다고 할 수 있다.
  CategoryMeals: {
    screen: CategoryMealsScreen,
  },
  MealDetail: MealDetailScreen,
});

// 이렇게 감싸준다음에 던져줘야 한다는 것이다.
export default createAppContainer(MealsNavigator);
