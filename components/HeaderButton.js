import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
// 이거 깔아줘야 한다. npm install --save @expo/vector-icons
// 이거 설치해주면 된다.
// Ionicons 이거는 그냥 Icons의 종류라고 생각을 하면된다.
// 저 패키지 이름 쳐가지고 여러가지 중에서 선택을 하면 될 것이다.
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  // 뭐 이건 props의 모든 key / value 쌍을 여기다가 넣겠다는 건데
  // React에서 많이 사용한거라 뭐 익숙하네.
  return (
    <HeaderButton
      {...props}
      // 이건 Ionicons 계열을 기대한다는 거임.
      // Custom icon은 쓸 수 없는건지 뭐 알아보도록 하자.
      IconComponent={Ionicons}
      //   사이즈나 칼라를 정할 수 있다는 거고. 뭐 중요한건 아님.
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
