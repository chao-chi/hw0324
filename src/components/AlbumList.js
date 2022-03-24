import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import HotAlbumDetail from "./HotAlbumDetail";
import sections from "../json/album_section.json"

const AlbumList = ({ navigation }) => {
  // const renderSectionHeader = ({section}) => {
  //   <>
  //     <Text style={styles.sectionHeader}>
  //       {section.title}
  //     </Text>
  //     {section.horizontal ? (

  //     ) : null}
  //   </>
  // }
  // const renderItem = ({ item, section }) => {
  //   if (section.horizontal){
  //     return null;
  //   }
  //   // return <AlbumDetail album={item} navigation={navigation} />
  // };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>
        {sections[0].title}
      </Text>
      <FlatList
        horizontal={true}
        data={sections[0].data}
        renderItem={({item}) => <HotAlbumDetail album={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
        keyExtractor={item => item.title}
      />
      <Text style={styles.sectionHeader}>
        {sections[1].title}
      </Text>
      <FlatList
        horizontal={true}
        data={sections[1].data}
        renderItem={({item}) => <HotAlbumDetail album={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingLeft: 0 }}
        keyExtractor={item => item.title}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  section: {
    marginLeft: 20,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 8
  }
})

export default AlbumList;

