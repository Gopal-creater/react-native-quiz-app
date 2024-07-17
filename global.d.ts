/// <reference types="nativewind/types" />

import { ImageSourcePropType } from "react-native";

declare module "*.png" {
  const content: ImageSourcePropType;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.bmp" {
  const content: string;
  export default content;
}
