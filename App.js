import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./navigation/MealsNavigator";

// for redux
// 일단은 기본적으로 createStore는 필요하고
// 여러개의 Reducer를 포함하고 싶으면은
// combineReducers를 또 import를 하면 된다.
// 뭐 아마 여기에서는 하나만 사용할 것 같긴 하지만 말이다.
import { createStore, combineReducers } from "redux";
import mealsReducer from "./store/reducers/meals";
// 이 Provider로 전체를 묶어줘야지
// redux를 쓸 수 있다는 것이다.
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  meals: mealsReducer,
  // 필요하면은 여러개의 Reducer를 여기다가 첨부하면 된다.
});

// combined된 Reducers들을 넣어서 store를 만들어준다.
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log("can not fetch the fonts")}
      />
    );
  }

  return (
    // Provider에는 store 하나만 전달을 해주면 된다.
    // 여러번 해서 그런지 되게 심플하게 느껴지네.
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
