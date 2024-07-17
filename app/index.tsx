import CustomBtn from "@/components/common/CustomBtn";
import CustomTxt from "@/components/common/CustomTxt";
import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 flex-col justify-center bg-primary p-2 gap-6">
      {/* Logo */}
      <CustomTxt className="text-center text-3xl font-jExtraBold">
        Ontario Tests
      </CustomTxt>

      <CustomTxt className="text-center">
        Welcome to all kind of test that ontario provides, Practice it and pass
        it at first time
      </CustomTxt>

      <View>
        <CustomBtn handlePress={() => router.push("/home")}>Explore</CustomBtn>
      </View>
    </SafeAreaView>
  );
}
