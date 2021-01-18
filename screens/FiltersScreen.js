import React, { useState, useEffect, useCallback } from "react";

// Switch라는 toggle component를 쓰는 것 인가보다.
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  // 그냥 props.navigatio을 쓰기 싫어서
  // 쪼개놓은 것 뿐이다.
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // 흠.. 나중에 다시 살펴봐야 겠찌만
  // useCallback이라는 것은 dependency가 바뀌지 않으면은
  // cache 된 것을 그대로 사용하겠다는 것임.
  // 최적화와 관련되어 있는 것으로 보임.
  // rendering 될떄마다 새롭게 하지 말고, cache를 이용하되
  // dependency가 바뀔때만 새로 만들어준다 그 얘기인듯.
  // 그리고 useCallback은 두번째 argument로 dependency를
  // 지정할 수 있다. 여기서는 is~~가 바뀔떄마다 새로 만들어줘야 하기때문에
  // 아래와 같이 적어놓았다.
  // 여기랑 useEffect 부분의 흐름을 잘 이해하는 것이 포인트가 되니까
  // 잘 공부해놓도록 하자.
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    // 여기서는 뭐 단순하게 찍는것만 했지만
    // 나중에 이걸로 filtering을 하겠다 그말이다.
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // 이것을 통해서 navigation에다가 특정 method를 전달하게 된다.
  // 그러면은 아래에 있는 FiltersScreen.navigationOptions에서
  // 이것을 사용할 수 있게 된다는 것이 포인트임.
  // 그리고 매번 이게 발동되는게 아니라,
  // saveFilters가 변할떄, 전달을 해주면 됨.
  // 즉, toggle이 변할때마다 이게 발동되면 되기 때문에
  // [saveFilters]를 달아준 것이다.
  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

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
    // 여기에다가 headerRight를 추가를 해주었다.
    // 선택된 Filters를 저장해서 Navigation에 전달해주기 위함이다.
    // 여기서 포인트가 되는 것은 Component와 Navigation의 데이터 전달임.
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          // 주의해야 할 것은 navData.navigation.getParam("save")
          // 이거 자체가 function이기떄문에 이렇게 놓는게 가능했다는 것이다.
          onPress={navData.navigation.getParam("save")}
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
