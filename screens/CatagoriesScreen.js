import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = (props) => {
  // 일단은 CategorisScreen 같은 경우는
  // MealsNavigator에 포함되어 있기 때문에
  // 특별한 props를 가진다. 그렇기 떄문에 여기서 이걸로 체크를
  // 해보겠다는 것임.
  // 뭐 여러가지가 있는데, 그것에 대해서는 그냥 Docs를 보고
  // 여기서는 필요한 것만 빨리빨리 캐치를 하자.
  // console.log(props);
  return (
    <View style={styles.screen}>
      <Text>This is Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          // navigate라는 것이 사실 핵심이다.
          // routeName에다가 Navigator에 정의한 것을 넣어주면은
          // 거길로 이동한다는 말인 듯 함.
          // props.navigation.navigate('CategoryMeals') 이렇게 바로 줘도 되긴 함.
          // 이걸 Object로 받는다는 것은 뭐 다양한 옵션을 줄 수도 있다는 뜻 같은데
          // 별다른 옵션을 주지 않는다면 뭐 저렇게 해도 상관 없는 듯 함.
          // 저번에는 if 랑 뭐 그런걸로 바꿧다면 이제는 navigation으로 바꾸니까
          // 좀 더 잘 만든 버전이라고 할 수 있겠음.
          // 근데 주의해야 할 것은 우리가 stack navigation을 import 했으니까
          // 이게 계속 쌓인다는 개념을 가지고 가야 한다. 그러니까 push를 한거랑 같은 거임.
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
