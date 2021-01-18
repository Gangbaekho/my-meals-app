import React, { useState } from "react";

// Switch라는 toggle component를 쓰는 것 인가보다.
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      {/* 
     뭐 Switch가 저런식으로 바뀐다는 그런말이고
     신기한건 !newValue가 아니라, 그냥 newValue를 그냥 집어넣네.
     그냥 그렇게 동작을 하나보다. 그려려니 하자.
    */}
      <Switch
        // 여기서 trackColor라는 것은 Switch 에 대한 background 색깔을 바꿀 수 있는
        // 그런 property 인데, true일 경우, 그니까 선택할 경우
        // 색깔을 바꿔주었다. false일 경우, 즉, 선택하지 않을 경우도 뭐
        // 스타일링을 할 수 있겠찌만은, 그냥 false의 경우는
        // default 색을 이용하겠다는 것임.
        trackColor={{ true: Colors.primaryColor }}
        // 이건 Switch의 동그라미 부분을 스타일링 할 수 있는 건데
        // 이 경우 뭐 Platform API를 이용했다 정도. ''은 그냥 default 값을
        // 의미한다 정도로 기억을 해주면 되겠다.
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        // props.state, props.onChange 같은 경우 이름을 마음대로 바꿔도 된다.
        // 이건 그냥 예시일 뿐임.
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  // 각각의 swtich에 대한 state를 관리하기 위해서
  // useState를 사용했다.
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters Screen",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});

export default FiltersScreen;
