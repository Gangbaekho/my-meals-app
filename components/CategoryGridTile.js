import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  //   Ripple? 뭐 물결모양을 말하는 건데
  //  Andriod에 주로 적용을 한다는 것을 알면 된다.
  //  그러니까, TouchableOpacity는 주로 IOS용이고
  //  TouchableNativeFeedback은 Android용이라고
  // 생각을 하면 된다.
  TouchableNativeFeedback,
  //   Android인지 IOS인지 구분하기 위해서 사용한다고
  //  생각을 하면 된다. 뭐 많이 사용한거니까..
  Platform,
} from "react-native";

const CategoryGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  //  그냥 안드로이드 이면서 버전 21이상인것은
  // TouchableOpacity를 쓰는게 아니라 NativeFeedback을 쓰도록
  // 만든 것 뿐임. 진짜 별거 아님.
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          {/* 글쎼다 numberOfLines 라는 것은 뭐 라인을 두개로 하라 뭐 그런 것 같다.
          일정 길이가 넘으면은 뭐 그렇게 하라는 것 같은데 자세한 것은 나중에 알아봐야 할 것 같다.
          */}
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    // 이걸 해줘야 Ripple effect가
    // 부모를 벗어나지 않는다 뭐 그런 말이다.
    overflow: "hidden",
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.27,
    shadowRadius: 10,
    // elevation은 IOS만을 위한 것이라고 하는데
    // 뭐 이전에 정리를 했던것 같기도 하고..
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "right",
  },
});

export default CategoryGridTile;
