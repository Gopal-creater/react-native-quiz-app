import { TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import CustomTxt from "./CustomTxt";

const CustomBtn = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props?.handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[45px] flex items-center justify-center ${
        props?.containerStyles
      } ${props?.isLoading ? "opacity-50" : ""}`}
      disabled={props?.isLoading}
    >
      <CustomTxt
        className={`text-primary font-jMed text-md text-center ${props.textStyles}`}
      >
        {props?.children}
      </CustomTxt>

      {props?.isLoading && (
        <ActivityIndicator
          animating={props?.isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomBtn;
