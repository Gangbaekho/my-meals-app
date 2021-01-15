import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
// 여기서 주의해야 할 것은 HeaderButtons이다. 복수형이라는 것.
// 아까 HeaderButton에서 쓴 것은 단수형태였다. 그거 주의하고
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    // 음 이런것을 써줄 수 있다.
    // 이건 Title이랑은 좀 다른데,
    // Title이 있는 그 라인의 가장 오른쪽에다가
    // JSX를 쓸 수 있다 뭐 그런 말이다.
    // 그런데 이걸 하려면은 npm install npm start
    // 이걸 깔아줘야 한다는데, 글쎄다. 패키지 이름이 좀 이상하고
    // 이해가 안가긴 하는데, 저걸 안깔아주면은 저게 발동이 안된다.
    // 이렇게 간단한 Text를 쓸 수도 있지만, Icon이나 Logo를 박는게 보통이다.
    // 근데 뭐가 마음에 안드는지
    // npm install --save react-navigation-header-buttons 이걸 깔라고 하네.
    // headerRight: <Text>FAV!</Text>,
    // 글쎼다. 뭐 아래 내용이 꽤나 와닿지는 않으나 이거 보고 따라할 수는 있을 것이다.
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        {/* 
        title은 알아서 정해주면 되고
        ios-star이라는 것은 이미 정해져 있는 value이다.
        Ionicons에 있는 그런 icons들 중에 하나일 것으로 예측되니,
        뭐 나중에 알아서 찾아보도록 하자.
        그리고 여기에는 뭐 Item을 하나만 두긴 했지만,
        여러개 둬도 됨. 그럼 Icon이 여러개 생기겠찌 뭐.
        */}
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as favorite");
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

export default MealDetailScreen;
