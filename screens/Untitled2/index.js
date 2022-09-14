import { Switch } from "react-native";
import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled2 = () => {
  return <View style={_styles.GHPxZWSD}>
      <TextInput style={_styles.kEPONsSw}></TextInput><FlatList style={_styles.gCElRTYn} renderItem={() => <View style={_styles.WxUENFOH}></View>} ItemSeparatorComponent={() => <View style={_styles.aTMpcrMZ} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList><CheckBox style={_styles.pKZaKQQk} title="Checkbox Title"></CheckBox><Slider style={_styles.sUvXarsd} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><Switch style={_styles.zvvOCYDG} thumbColor="#f24d4d"></Switch></View>;
};

export default Untitled2;

const _styles = StyleSheet.create({
  GHPxZWSD: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  kEPONsSw: {
    left: 108.4507042253521,
    top: 49.29577464788732,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  gCElRTYn: {
    left: 63.38028169014084,
    top: 156.33802816901408,
    position: "absolute",
    width: 100,
    height: 150
  },
  WxUENFOH: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  aTMpcrMZ: {
    backgroundColor: "#000000",
    height: 1
  },
  pKZaKQQk: {
    left: 36.61971830985915,
    top: 383.09859154929575,
    position: "absolute",
    width: 183,
    height: 69
  },
  sUvXarsd: {
    left: 156.33802816901408,
    top: 525.3521126760563,
    position: "absolute",
    width: 150,
    height: 40
  },
  zvvOCYDG: {
    left: 250.70422535211264,
    top: 211.26760563380282,
    position: "absolute",
    width: 50,
    height: 25,
    transform: "rotate(90deg)"
  }
});