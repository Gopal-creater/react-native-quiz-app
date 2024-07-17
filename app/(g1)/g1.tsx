import { Linking, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomTxt from "@/components/common/CustomTxt";
import CustomBtn from "@/components/common/CustomBtn";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";

const G1 = () => {
  return (
    <View className="flex-1 bg-primary p-2 gap-6">
      {/* Heading */}
      <CustomTxt className="text-xl font-jBold text-center">
        G1 License Test
      </CustomTxt>

      {/* Banner */}
      <View className="bg-secondary p-6 rounded-xl">
        <View className="flex-row flex-wrap mb-5">
          <View className="w-1/2 items-center">
            <MaterialIcons name="follow-the-signs" size={80} color="yellow" />
            <CustomTxt className="text-primary mt-1 text-lg font-jBold">
              Signs (20 Questions)
            </CustomTxt>
          </View>

          <View className="w-1/2 items-center">
            <MaterialIcons name="rule" size={79} color="orange" />
            <CustomTxt className="text-primary mt-1 text-lg font-jBold">
              Rules (20 Questions)
            </CustomTxt>
          </View>
        </View>
        <CustomTxt className="text-primary font-jMed">
          G1 is a knowledge test for class G vehicles. There are two sections in
          it as shown above.To pass the test, you should score at least 16 from
          each section.
        </CustomTxt>
      </View>

      {/* CheckList */}
      <View>
        <View className="flex-row gap-2 items-center">
          <AntDesign name="checkcircleo" size={24} color="black" />
          <CustomTxt className="text-lg font-jMed">Checklist:</CustomTxt>
        </View>

        <View className="p-6 bg-gray-200 rounded-xl mt-2">
          <CustomTxt className="font-jMed">
            Bring the following items to the test:{"\n\n"}1. Two pieces of
            identification{"\n"}2. Money for test fees – cash, debit or credit
            {"\n"}3. Glasses or contact lenses (if you need to wear them to
            drive)
          </CustomTxt>
        </View>
      </View>

      {/* Practice */}
      <View>
        <View className="flex-row gap-2 items-center">
          <MaterialCommunityIcons
            name="newspaper-check"
            size={26}
            color="black"
          />
          <CustomTxt className="text-lg font-jMed">Practice the test</CustomTxt>
        </View>

        <View className="flex-row flex-wrap mt-2">
          <CustomBtn
            containerStyles="w-[49%]"
            handlePress={() => router.push("/quiz")}
          >
            Signs
          </CustomBtn>
          <View className="w-[2%]" />
          <CustomBtn containerStyles="w-[49%]">Rules</CustomBtn>
        </View>
      </View>

      {/* External link */}
      <View>
        <CustomTxt className="text-center">For any more details</CustomTxt>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.ontario.ca/page/driving-and-roads")
          }
        >
          <CustomTxt className="text-blue-500 font-jMed text-md underline text-center">
            Visit official website
          </CustomTxt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default G1;
