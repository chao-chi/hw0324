import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import StarList from "./StarList"

const HotAlbumDetail = ({album, navigation}) => {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Pressable 
            onPress={() => {navigation.navigate('Detail', album)}}
          >
           <Image
             style={styles.imageStyle}
             source={{uri: album.image}}
           />
          </Pressable>
        </View>
      </View> 
      <View>
        {album.starDisplay ?
          <View style={styles.homeStarList}>
            <StarList star={album.star} />
          </View>
        : null}
        <Text style={styles.headerTitleStyle}>{album.title}</Text>
        <Text style={styles.headerContentStyle}>{album.artist}</Text>
      </View>
   </View>
  )
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginRight: 16,
    marginTop: 16,
    paddingLeft: 0
  },
  headerTitleStyle: {
    color: '#000',
    marginTop: 16,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '300',
    color: "#131313",
    width: '100%'
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
  ,homeStarList: {
    marginTop: 16.5
  }
});

export default HotAlbumDetail;
