import { Image, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomTxt from "@/components/common/CustomTxt";
import constants from "../../constants";
import { router } from "expo-router";
import { QuizState } from "@/redux/slices/quizSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import NoData from "@/components/common/NoData";

const Home = () => {
  const quizState: QuizState = useSelector((state: RootState) => state.quiz);

  return (
    <View className="flex-1 bg-primary pt-6 gap-6">
      {/* banner------ */}
      <View className="flex-row items-center p-6 rounded-xl bg-secondary">
        <CustomTxt className="text-3xl text-primary font-jExtraBold">
          Pass At {"\n"}
          First Time
        </CustomTxt>
        <Image
          source={constants.images.trophy}
          className="w-[240px] h-[110px]"
          resizeMode="contain"
        />
      </View>
      {/* banner------ */}

      {/* Featured item------ */}
      <View className="gap-2">
        <CustomTxt className="text-lg font-jMed">
          Featured Ontario's test
        </CustomTxt>

        <View className="flex-row flex-wrap hover:cursor-pointer">
          {constants.featuredTest.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="w-1/2 p-1"
              onPress={() => router.push(item.link)}
            >
              <View className="bg-gray-200 p-4 rounded-lg justify-center items-center">
                {item.image}
                <CustomTxt className="font-jMed">{item.title}</CustomTxt>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Featured item------ */}

      {/* Test results */}
      <View className="gap-2">
        <CustomTxt className="text-lg font-jMed">Recent Test Results</CustomTxt>
        {quizState.quizHistory.length === 0 ? (
          <NoData />
        ) : (
          quizState.quizHistory.map((quiz, index) => {
            return (
              <View key={index} className="p-2 bg-secondary rounded-3xl">
                <CustomTxt className="text-primary font-jExtraBold text-lg">
                  {quiz.score}/{quiz.totalQuestions}
                </CustomTxt>
              </View>
            );
          })
        )}
      </View>
    </View>
  );
};

export default Home;
