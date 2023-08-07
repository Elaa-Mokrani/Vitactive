import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemCarDontainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("doctor", { param: data })}
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 160,
        marginBottom: 8,
        backgroundColor: "#FFFFFF",
        
      }}
    >
      <Image
        source={imageSrc}
        style={{
          width: "100%",
          height: 120,
          borderRadius: 4,
          resizeMode: "cover",
        }}
      />

      {title ? (
        <>
          <Text style={{ color: "#428288", fontSize: 18, fontWeight: "bold" }}>
            {title.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text style={{ color: "#428288", fontSize: 14, fontWeight: "bold" }}>
              {location.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCarDontainer;
