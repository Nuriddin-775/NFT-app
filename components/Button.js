import { TouchableOpacity, Image, Text } from "react-native";
import React from "react";

import { COLORS, SIZES, SHADOWS, FONTS } from "../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        width: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      handlePress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ handlePress }) => {
  return (
    <TouchableOpacity
      style={{
        minWidth: 120,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
      }}
      handlePress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.font,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
