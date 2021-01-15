import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          {/* 이런식으로 styling을 할 수도 있다.
            음.. mealRow라는 것은 둘 다 적용하고, header, detail은 따로따로
            적용하기 위해서 이렇게 했다. 뭐 근데 Object로 styling을 한다는 것을
            알면은 뭐 당연한 내용이긴 하다. 나중에 응용할 수 있도록 한다.
            */}
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            {/* ImageBackground를 이용하기 위해서는 이런식으로 사용하면 된다. */}
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              {/* 
              이렇게 nuberOfLines를 1로 무조건 하게 되면은
                화면에 다 나타낼 수 없을떄는 ... 으로 표기해주기 때문에
                꽤나 유용하게 사용할 수 있다는 것을 알자!.
                */}
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

// 뭐 스타일링이야 이제 알아서 해야 할 부분이다.
// 이런건 이제 알아서 분석해서 알아내라.
const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    // overflow 히든 해주는 것은,
    // 백그라운드도 같이 잘려나가게 하기 위해서이다.
    // 백그라운드 자체에는 borderRadius를 먹이지 않았기 때문이다.
    overflow: "hidden",
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  //   backgroundImage는 width를 정해줘야 하는건가.
  //   CSS에서는 저렇게 하면 화면 비율이 깨질텐데
  // 여기서는 어떻게 하는지 보자.
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default MealItem;
