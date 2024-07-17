import constants from "@/constants";
import React from "react";
import { View, Image } from "react-native";
import CustomTxt from "./CustomTxt";

const NoData = () => {
  return (
    <View className=" justify-center items-center">
      <Image
        source={constants.images.nodata}
        className="w-[300px] h-[200px]"
        resizeMode="contain"
      />
      <CustomTxt className="text-center font-jMed mt-[-15px]">
        No Data!!!
      </CustomTxt>
    </View>
  );
};

export default NoData;
