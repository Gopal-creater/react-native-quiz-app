import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

export function useFontLoader() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [loaded, error] = useFonts({
    "JetBrainsMono-Bold": require("../assets/fonts/JetBrainsMono-Bold.ttf"),
    "JetBrainsMono-ExtraBold": require("../assets/fonts/JetBrainsMono-ExtraBold.ttf"),
    "JetBrainsMono-Medium": require("../assets/fonts/JetBrainsMono-Medium.ttf"),
    "JetBrainsMono-Regular": require("../assets/fonts/JetBrainsMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setFontsLoaded(true);
    }
  }, [loaded, error]);

  return fontsLoaded;
}
