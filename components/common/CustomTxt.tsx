import { Text } from "react-native";
import React from "react";

const CustomTxt = (props: any) => {
  return (
    <Text {...props} className={`font-jReg text-black ${props.className}`}>
      {props.children}
    </Text>
  );
};

export default CustomTxt;
