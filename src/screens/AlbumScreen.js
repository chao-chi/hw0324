import React from "react";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";

const AlbumScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1,backgroundColor:'#fff'}}>
      <AlbumList 
        navigation={navigation}
      />
    </View>
  );
};

export default AlbumScreen;