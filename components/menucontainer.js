import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center", marginVertical: 8 }}
      onPress={handlePress}
    >
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: type === title.toLowerCase() ? "#CCCCCC" : undefined,
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Image
          source={imageSrc}
          style={{ width: 60, height: 60, resizeMode: "contain" }}
        />
      </View>
      <Text style={{ color: "#00BCC9", fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
