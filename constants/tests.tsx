import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export const featuredTest = [
  {
    title: "G1 License",
    image: <FontAwesome5 name="car" size={55} color="#B15AF6" />,
    link: "/g1",
  },
  {
    title: "Truck Driver",
    image: (
      <MaterialCommunityIcons name="truck-minus" size={55} color="#B15AF6" />
    ),
    link: "/",
  },
  {
    title: "Citizenship",
    image: <AntDesign name="idcard" size={55} color="#B15AF6" />,
    link: "/",
  },
  {
    title: "M1 License",
    image: <FontAwesome6 name="motorcycle" size={55} color="#B15AF6" />,
    link: "/",
  },
];
