import { SplashScreen, Stack } from "expo-router";
import React from "react";
import { useFontLoader } from "@/hooks/useFontLoader";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //Loading fonts------
  const fontsLoaded = useFontLoader();

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="(g1)" options={{ headerShown: false }} />
          <Stack.Screen name="(quiz)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="dark" />
      </Provider>
    </>
  );
}
