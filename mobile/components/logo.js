import { Image } from "react-native";
import React from "react";

const Logo = ({ value }) => {
  return (
    <Image
      source={{
        uri: "https://cdn.discordapp.com/attachments/1283068121392873582/1315667153202053131/foodcourtlogo.png?ex=6760cfc5&is=675f7e45&hm=4188009a7089869227ffabe92696dfa5e2913715ce5d92f2db19a27941624b73&",
      }} // Replace with your image URL
      style={{ width: 300, height: 300, marginTop: 20 }}
    />
  );
};

export default Logo;
